import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="pt-16 py-10 " id="home">
      <div className=" bg-[url('/hero.png')] bg-cover  text-gray-900 h-full w-full pb-5">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-2 mt-4 py-2 font-bold">
            <h1 className=" text-xl sm:text-2xl md:text-5xl pt-3 mb-3 bg-gradient-to-l from-blue-700 to-white px-3">
              <span className="text-blue-700">Neltech</span>
              <span className="text-blue-200">nologies</span>
            </h1>
            <h1 className="capitalize text-base  sm:text-lg md:text-2xl">
              your full tech
              <span className="bg-gradient-to-l from-purple-500 to-white px-2">
                team
              </span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4 pt-5">
            {/* left */}
            <div className="">
              <h2 className="text-cyan-500 text-lg font-semibold">Startups</h2>
              <p className="text-base py-2">
                We build your MVP and sacle your vision.
              </p>
              <Button
                children={"PITCH YOUR IDEA"}
                buttonClass={
                  "text-white text-base bg-gradient-to-l from-blue-900 to-blue-300 px-4 md:px-6 py-1 md:py-2 flex justify-center item-center gap-1 pt-3 mt-2 font-semibold"
                }
                iconClass={"text-white"}
              />
            </div>

            {/* right */}
            <div className="">
              <h2 className="text-blue-900 text-lg font-semibold">
                Businesses
              </h2>
              <p className="text-base py-2">
                Cutting edge AI and software solutions tailored to you.
              </p>
              <Button
                children={"Request a consultation"}
                buttonClass={
                  "text-black text-base bg-white px-4 md:px-6 py-1 md:py-2 flex justify-center item-center gap-1 pt-3 mt-2 border-2 border-black uppercase font-semibold"
                }
                iconClass={"text-black"}
              />
            </div>
          </div>
          {/* team picture */}

          <div className="w-full h-[400px] mt-10 pt-5 relative ">
            <div className="w-full h-full bg-[url('/team2.png')]  bg-cover">
              {/* <img src="/team.png" alt="" className="w-full h-full " /> */}
            </div>
          </div>
        </div>
      </div>
      {/* what we do */}
      <div className="w-full h-full bg-[url('/footer.png')]  bg-cover flex justify-between items-center gap-4 py-5 ">
        <div className="container">
          <div className="h-[20px] w-full hidden md:block"></div>
          <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
            <div className="w-full h-full">
              <h3 className="text-lg text-white font-semibold capitalize">
                We do&apos;t just invest
              </h3>
              <p className="text-base text-gray-400">
                We do&apos;t just invest, we are partners for building your
                entire tech solutions.
              </p>
            </div>
            <div className="w-[4px] h-16 bg-gray-500 hidden md:block"></div>

            <div className="w-full h-full">
              <h3 className="text-lg text-white font-semibold capitalize">
                Concepts from MVP to scale
              </h3>
              <p className="text-base text-gray-400">
                From concepts to MVP to scale, we handle development,
                infrastructure and AI.
              </p>
            </div>
            <div className="w-[4px] h-16 bg-gray-500 hidden md:block"></div>

            <div className="w-full h-full">
              <h3 className="text-lg text-white font-semibold capitalize">
                Focus on growth
              </h3>
              <p className="text-base text-gray-400">
                You focus on customers and businesses while we handle the core
                business logic through Tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
