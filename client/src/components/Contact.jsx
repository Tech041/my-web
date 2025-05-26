import React from "react";

const Contact = () => {
  return (
    <section className="bg-[url('/hero.png')]">
      <div className="container">
        <div className="flex items-center justify-center h-[450px] ">
          <div className="w-full  bg-white p-8 rounded-lg ">
            <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
              Contact Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-l from-blue-900 to-blue-300 text-white p-3 rounded-md  "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
