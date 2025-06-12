import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const mobileStyle = "cursor-pointer text-white w-[100px]";
const liStyles = "hover:cursor-pointer hover:text-blue-400  px-2 ";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useContext(AppContext);

  return (
    <header className=" fixed py-2 h-auto w-full   bg-white z-40">
      <div className="container">
        <div className="flex items-center hover:cursor-pointer">
          {/* logo */}
          <div className="flex-1 flex items-center gap-1 ">
            <a href="#home" className="flex  items-center justify-center gap-2">
              <span className=" p-[2px] bg-gradient-to-l from-blue-400 to-cyan-500 rounded-full">
                <img
                  src="/logo.webp"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              </span>

              <span className="text-sm text-cyan-700 font-bold hidden lg:block ">
                Neltech
              </span>
            </a>
          </div>
          {/* nav links */}
          <nav className=" flex justify-between items-center gap-3 flex-[2] relative">
            <div className="flex-[3] hidden md:block ">
              <ul className="flex justify-center items-center gap-5 text-blue-900  font-semibold">
                <li className={liStyles}>
                  <a href="#about" className="">
                    About
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#services" className="">
                    Services
                  </a>
                </li>

                <li className={liStyles}>
                  <a href="#portfolio" className="">
                    Portfolio
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#testimonials" className="">
                    Testimonials
                  </a>
                </li>
                {token ? (
                  <Link to={"/messages"} className="text-red-700">
                    Messages
                  </Link>
                ) : (
                  <li className={liStyles}>
                    <Link to="/login">Admin</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex-1 flex  items-center gap-4 justify-end ">
              <Button
                href={"#contact"}
                children={"CONTACT"}
                buttonClass={
                  " italic bg-gradient-to-l from-blue-700 to-blue-300 transition-opacity duration-300 hover:opacity-80 text-white px-3 md:px-4 py-1 md:py-2  flex justify-center items-center gap-2 rounded-md"
                }
                iconClass={"text-white"}
              />

              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden z-40 cursor-pointer"
              >
                {isOpen ? (
                  <MdClose color="white" size={30} />
                ) : (
                  <GiHamburgerMenu size={20} color="black" />
                )}
              </div>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav
            className={`${
              isOpen ? "right-0" : "right-[-100%]"
            } md:hidden absolute  top-0 h-screen  w-[70%] bg-blue-400   transition-all duration-700 ease-out z-30`}
          >
            <ul className="text-black mt-20 pt-10 flex flex-col gap-6 items-center font-bold  ">
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#about" className="">
                  About
                </a>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#services" className="">
                  Services
                </a>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#portfolio" className="">
                  Portfolio{" "}
                </a>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#testimonials" className="">
                  Testimonials
                </a>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                {token ? (
                  <Link to={"/messages"} className="text-red-700">
                    Messages
                  </Link>
                ) : (
                  <Link to="/login">Admin</Link>
                )}{" "}
              </li>
            </ul>
            {/* social links */}
            <div className="flex items-center justify-center gap-5 pt-10 ">
              <div className=" bg-white p-2 rounded-full">
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
              <div className="bg-white p-2 rounded-full">
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
              <div className="bg-white p-2 rounded-full">
                <a href="https://wa.link/cfop30" target="_blank" className="">
                  <span className="">
                    <FaWhatsapp size={20} color="green" />
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
