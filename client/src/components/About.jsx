const spanStyle = "font-semibold text-cyan-700 italic pr-2";

const About = () => {
  return (
    <section className=" h-full w-full  bg-white pt-10  " id="about">
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
                I'm a Pharmacist turned full-stack developer with a passion for
                building scalable and user-centric web applications using the
                MERN stack (MongoDB, Express.js, React, Node.js). With a
                proactive mindset and a result-driven approach, I create modern
                software solutions that help businesses streamline operations,
                engage users, and grow efficiently. I blend technical expertise
                with problem-solving skills to deliver impactful digital
                products across industries.
              </p>
              <h3 className="text-xl font-bold text-blue-900 py-2">
                What do I do at Neltech?
              </h3>
              <p className="py-1">
                At Neltech, I don’t just build websites—I innovate. My
                expertise spans across:
              </p>
              <div className="flex flex-col justify-center gap-1 py-2">
                <span className="">
                  <span className={spanStyle}>
                    AI-Integrated Applications:{" "}
                  </span>
                  – From eCommerce platforms and real estate portals to social
                  media apps and learning management systems, I build
                  intelligent, automated solutions that help businesses,
                  education, and online communities thrive.
                </span>
                <span className="">
                  <span className={spanStyle}>
                    High-Converting Web Experiences:
                  </span>{" "}
                  I design and develop engaging landing pages, dashboards, brand
                  websites, and full-scale web applications—all optimized for
                  performance, user experience, and conversions.
                </span>
                <span className="">
                  <span className={spanStyle}></span> Seamlessly connecting
                  buyers and sellers through smart, intuitive interfaces.
                </span>
                <span className="">
                  <span className={spanStyle}>
                    Smart Interfaces That Connect:
                  </span>
                  Whether it’s a marketplace or a custom platform, I create
                  intuitive, seamless interfaces that connect buyers and sellers
                  with ease.
                </span>
                <p className="pb-5">
                  At Neltech, staying ahead means embracing the latest in AI and
                  web technologies. I combine innovation with strategic thinking
                  to ensure every solution is future-ready, efficient, and built
                  to deliver measurable results. Welcome to
                  Neltech—where technology meets intelligence, and ideas
                  become reality!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
