import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[url('/footer.webp')] bg-cover text-white h-full">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5 pt-5 text-white italic ">
                Neltech
              </p>
              <div className="">
                <a href="#home" className="">
                  <img
                    src="/logo.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 pt-5 text-white ">
              Quick Link
            </p>
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer py-1">
                <a href="#about" className="">
                  About
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#services" className="">
                  Services
                </a>
              </li>
              <li className="cursor-pointer py-1">
                <a href="#portfolio" className="">
                  Portfolio
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#testimonials" className="">
                  Testimonials
                </a>
              </li>
              <li className="cursor-pointer py-1">
                <a href="#contact" className="">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 text-white ">
              Contact Us
            </p>
            <div className="">
              <div className="flex  items-center w-full ">
                <div className="flex items-center justify-between gap-3  ">
                  <div className="p-2 bg-white rounded-full">
                    <a
                      href="https://www.facebook.com/mandela.nelson.18062"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaFacebookF size={20} color="blue" />
                      </span>
                    </a>
                  </div>
                  <div className=" p-2 bg-white rounded-full">
                    <a
                      href="https://www.linkedin.com/in/nel21"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaLinkedinIn size={20} color="blue" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <a
                  href="tel:+2348030507512"
                  className="flex items-center gap-3"
                >
                  <FaPhone size={15} />
                  <span className="">+2348030507512</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center text-white  ">
            Copyright &copy;Neltech {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
