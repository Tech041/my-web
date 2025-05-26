import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="pt-5" id="testimonials">
      <div className="container">
        <h1 className="text-center text-lg text-blue-900 font-semibold mb-5 ">
          Our Clients Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ReviewCard
            name=" Bruce"
            rating={4}
            review="Outstanding service! They designed a sleek and functional website that exceeded our expectations. Their professionalism and attention to detail were remarkable!"
          />
          <ReviewCard
            name="Samuel"
            rating={4}
            review="Fast, reliable, and highly skilled! The team transformed our digital presence and helped us attract more customers. Highly recommended"
          />
          <ReviewCard
            name=" Humphery"
            rating={4}
            review="Exceptional web solutions! From development to maintenance, their expertise ensured a seamless experience. Great communication and support throughout"
          />{" "}
          <ReviewCard
            name="Richard"
            rating={4}
            review="Impressed by their creativity and technical skills! They provided a custom website that perfectly matched our brand vision. Will definitely work with them again!"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
