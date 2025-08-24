import React from "react";
import Button from "./Button";
import VariationCard from "./VariationCard";
import { IoPeople } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { GrDropbox } from "react-icons/gr";

const OurVariation = () => {
  return (
    <section className="bg-[url('/footer.webp')] bg-cover h-full w-full">
      <div className="container">
        <div className="">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold pt-5 text-center capitalize">
            What makes me different
          </h1>
          <div className="flex items-center pb-4">
            <div className="w-[50%] h-[3px] rounded-lg bg-white"></div>
            <div className="w-full h-[1px] bg-gray-500"></div>
          </div>
          <div className="text-white pb-4">
            <p className="">
              {" "}
              At Neltech, I push boundaries to create cutting-edge
              solutions that empower you. The future starts here.
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 pb-5">
            <VariationCard
              icon={<IoPeople size={30} color="white" />}
              title={"Tech manager"}
              text={"I don't just innovate, I build and manage everything for you."}
            />
            <VariationCard
              icon={<FaBoxOpen color="white" />}
              title={"startup to scale"}
              text={
                "Unlike agencies, I stay long term to help your company grow."
              }
            />
            <VariationCard
              icon={<GrDropbox color="white" />}
              title={"enterprise-Grade tech"}
              text={
                "I bring silicon-valley level development to companies of all sizes."
              }
            />
          </div>{" "}
        </div>
      </div>
      {/* <div className="w-full h-[400px] lg:h-[750px] mt-10 pt-5 relative ">
        <div className="w-full h-full bg-[url('/software_2.webp')]  bg-cover bg-no-repeat bg-center ">
        
        </div>
      </div> */}
    </section>
  );
};

export default OurVariation;
