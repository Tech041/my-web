import React from "react";
import ServiceCard from "./ServiceCard";
import { IoArrowForward } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { SiStartrek } from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";
import { MdSignalWifiStatusbarConnectedNoInternet3 } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { SiDigitalocean } from "react-icons/si";
import Button from "./Button";
import Assistance from "./Assistance";
const OurServices = () => {
  return (
    <section className="h-full w-full" id="services">
      <div className="container">
        <div className="bg-[url('/hero.webp')] bg-cover pb-5 mb-10">
          <h1 className="capitalize text-xl font-semibold">My Services</h1>
          <p className="">
            I support startups and companies by providing world-class tech
            solutions.
          </p>
        </div>
        {/* card */}
        <div className="flex justify-center items-center pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <ServiceCard
              icon1={<BsBuildings size={20} color="blue" />}
              icon2={<IoArrowForward size={20} />}
              text1={"Enterprise software solutions"}
              text2={"From idea to launch, I build everything you need.  "}
              className={
                "border-t border-r border-b border-gray-500 px-16 py-4 w-full"
              }
            />
            <ServiceCard
              icon1={<FaMobileScreen size={30} color="purple" />}
              icon2={<IoArrowForward size={20} />}
              text1={"Mobile app development"}
              text2={"Mobile-first apps, Real-time apps and Complex dashbaords  build for scale.  "}
              className={
                "border-t border-l border-b border-gray-500 px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              icon1={
                <MdSignalWifiStatusbarConnectedNoInternet3
                  size={30}
                  color="green"
                />
              }
              icon2={<IoArrowForward size={20} />}
              text1={"Web developement"}
              text2={
                "Fast modern websites and web applications that drive growth.  "
              }
              className={
                "border-t border-r border-b border-gray-500 px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              icon1={<IoIosCloudOutline size={30} color="gray" />}
              icon2={<IoArrowForward size={20} />}
              text1={"Cloud deployment and DevOps"}
              text2={" I deliver scalable cloud architecture. "}
              className={
                "border-t border-l border-b border-gray-500 px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              icon1={<SiDigitalocean size={20} color="blue" />}
              icon2={<IoArrowForward size={20} />}
              text1={"Full scale digital marketing"}
              text2={"SEO,paid adds and brand growth strategies.  "}
              className={
                "border-t border-r border-b border-gray-500 px-16 py-4 w-full"
              }
            />
            <ServiceCard
              icon1={<SiStartrek size={30} color="red" />}
              icon2={<IoArrowForward size={20} />}
              text1={"Startup MVP development"}
              text2={"From idea to launch, I build everything you need.  "}
              className={
                "border-t border-l border-b border-gray-500 px-16 py-4 w-full"
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-6 pb-5">
          <Assistance />
          <Button
            children={"Request a consultation"}
            buttonClass={
              "text-black  text-sm md:text-base bg-white px-4 md:px-6 py-1 md:py-2 flex justify-center item-center gap-1  mt-2 border-2 border-black uppercase font-semibold"
            }
            iconClass={"text-black"}
          />
        </div>
      </div>{" "}
    </section>
  );
};

export default OurServices;
