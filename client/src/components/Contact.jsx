import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const messageSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not valid email"),
  message: z.string().min(1, { message: "Message is required" }),
});
const Contact = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(messageSchema) });

  const handleSendMessage = async (message) => {
    try {
      const res = await axios.post(serverUrl + "/api/message/post", message);
      if (res.data.success) {
        toast.success("Message sent. Thank you!");
        reset();
      } else {
        toast.error("something went wrong,Retry!");
      }
    } catch (error) {
      console.log("Error sending message", error);
    }
  };
  return (
    <section className="bg-[url('/hero.png')]" id="contact">
      <div className="container">
        <div className="flex items-center justify-center h-[450px] ">
          <div className="w-full  bg-white p-8 rounded-lg ">
            <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
              Contact me
            </h2>
            <form
              onSubmit={handleSubmit(handleSendMessage)}
              className="space-y-4"
            >
              <div className="">
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}

              <div className="">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}

              <div className="">
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                ></textarea>
              </div>
              {errors.message && (
                <p className="text-red-600">{errors.message.message}</p>
              )}

              <div className="">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-l from-blue-900 to-blue-300 text-white p-3 rounded-md  "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
