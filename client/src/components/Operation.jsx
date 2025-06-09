import React, { useState } from "react";
import Button from "./Button";
import IdeaCard from "./IdeaCard";

const Operation = () => {
  const [isSelected, setIsSelected] = useState("02");
  return (
    <section>
      <div className="bg-[url('/hero.webp')] bg-cover  py-5">
        <div className="container">
          <div className="flex  flex-col md:flex-row justify-between items-center">
            <div className="">
              <h1 className=" text-2xl md:text-4xl  font-semibold text-black capitalize ">
                How I Operate
              </h1>
              <div className="h-[3px] w-16 pt-1 bg-blue-600 rounded-lg"></div>
            </div>
            <Button
              children={"Request a consultation"}
              buttonClass={
                "text-black text-sm md:text-base bg-white px-4 md:px-6 py-1 md:py-2 flex justify-center item-center gap-1  mt-2 border-2 border-black uppercase font-semibold"
              }
              iconClass={"text-black"}
            />
          </div>{" "}
        </div>
      </div>
      <div className="w-full h-full">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full flex flex-col items-center gap-3 pt-4">
              <IdeaCard
                onClick={() => setIsSelected("01")}
                number={"01"}
                className={`${
                  isSelected === "01"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-black"
                } flex  items-center gap-4 w-full py-3 cursor-pointer`}
                spanClass={`${
                  isSelected === "01" ? "bg-white" : "bg-gray-200"
                } p-2 md:p-4  rounded-full italic`}
                title={"Generate your ideas/consultation "}
                text={"Tell me your vision or tech needs."}
              />
              <IdeaCard
                onClick={() => setIsSelected("02")}
                number={"02"}
                className={`${
                  isSelected === "02"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-black"
                } flex  items-center gap-4 w-full py-3 cursor-pointer`}
                spanClass={`${
                  isSelected === "02" ? "bg-white" : "bg-gray-200"
                } p-2 md:p-4  rounded-full italic`}
                title={"I plan and strategize "}
                text={"I  craft a roadmap tailored to you."}
              />
              <IdeaCard
                onClick={() => setIsSelected("03")}
                number={"03"}
                className={`${
                  isSelected === "03"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-black"
                } flex  items-center gap-4 w-full py-3 cursor-pointer`}
                spanClass={`${
                  isSelected === "03" ? "bg-white" : "bg-gray-200"
                } p-2 md:p-4  rounded-full italic`}
                title={"I build,deploy and maintain"}
                text={"MVP,mobile-first App,LLM integration - whatever you need, I develop it."}
              />
              <IdeaCard
                onClick={() => setIsSelected("04")}
                number={"04"}
                className={`${
                  isSelected === "04"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-black"
                } flex  items-center gap-4 w-full py-3 cursor-pointer`}
                spanClass={`${
                  isSelected === "04" ? "bg-white" : "bg-gray-200"
                } p-2 md:p-4  rounded-full italic`}
                title={"You scale,I stay"}
                text={"Long term partnership - growth beyond launch ."}
              />
            </div>
            <div className=" flex-1 w-full h-[350px] mt-10 pt-5 relative hidden md:block  ">
              <div className="w-full h-full bg-[url('/team3.png')]  bg-cover">
                {/* <img src="/team.png" alt="" className="w-full h-full " /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operation;
