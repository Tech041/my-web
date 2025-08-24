const About = () => {
  return (
    <section className=" h-full w-full  bg-white py-10  " id="about">
      <div className="container">
        <div className="">
          <h1 className="text-xl md:text-2xl font-semibold text-center md:text-start text-black  "></h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-3">
            {/* left */}
            <div className="flex-1 flex justify-center  ">
              <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex flex-col justify-center items-center gap-1">
                <h1 className=" text-lg md:text-xl font-bold text-center md:hidden text-blue-800 ">
                  About Me
                </h1>
                <span className="w-[100px]  h-[100px] bg-gradient-to-tr from-purple-500 to-cyan-400 p-1 rounded-full">
                  <img
                    src="/profile pic.jpg"
                    alt="ceo_image"
                    className=" w-full h-full  object-cover rounded-full "
                  />
                </span>
                <span className="text-lg font-semibold pb-3 flex flex-col justify-center items-center">
                  Chinwuba Nelson{" "}
                  <span className="text-xs">(B.Pharm, MPSN)</span>
                </span>
              </div>{" "}
            </div>
            {/* right */}
            <div className=" flex-[2]">
              <h1 className="pb-6  text-lg md:text-xl font-bold text-center pt-4 hidden md:block text-blue-800">
                About Me
              </h1>

              <p className="">
                I’m a Software Engineer and Founder of Neltech, passionate about
                building scalable, user-centric web applications with the MERN
                stack (MongoDB, Express.js, React, Node.js). At Neltech, I focus
                on creating modern software solutions that help businesses
                streamline operations, engage users, and grow efficiently. By
                blending technical expertise with strong problem-solving skills,
                I deliver impactful digital products that drive growth and
                deliver meaningful user experiences across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
