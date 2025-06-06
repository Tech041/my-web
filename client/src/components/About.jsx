const spanStyle = "font-semibold text-cyan-700 italic";

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
                <span className="font-bold text-cyan-900 italic">
                  {" "}
                  Neltechnologies
                </span>{" "}
                was founded by a visionary pharmacist who transitioned into
                software engineering, driven by a passion for solving real-world
                challenges through technology. As a proactive and result-driven Full
                stack developer <span className="bg-gradient-to-tr from-blue-400 to-white px-2 text-gray-700 text-sm italic font-semibold">[MERN]</span>, I develop
                cutting-edge software solutions that empower businesses across
                industries, seamlessly merging innovation with strategic impact.
              </p>
              <h3 className="text-xl font-bold text-blue-900 py-2">
                My Expertise includes:
              </h3>
              <div className="flex flex-col justify-center gap-1">
                <span className="">
                  <span className={spanStyle}>
                    AI-Integrated eCommerce applications,real estate
                    applications,social media applications and learning
                    management system platforms{" "}
                  </span>
                  – Helping businesses, social interactions and learning to
                  thrive with intelligent, automated solutions.
                </span>
                <span className="">
                  <span className={spanStyle}>
                    Landing Pages, dashboards,brand websites and web
                    applications
                  </span>{" "}
                  – Designed for maximum engagement and conversions.
                </span>
                <span className="">
                  <span className={spanStyle}></span> Seamlessly connecting
                  buyers and sellers through smart, intuitive interfaces
                </span>
                <span className="">
                  <span className={spanStyle}>
                    Custom solutions for all business models{" "}
                  </span>
                  – Tailored digital strategies powered by AI-driven automation.
                </span>
                <p className="pb-5">
                  At Neltechnologies, I don&apos;t just build websites—I
                  innovate. By integrating artificial intelligence into your
                  platforms, I ensure businesses stay ahead of the latest
                  technological advancements globally, optimizing efficiency and
                  user experience. Welcome to Neltechnologies—where technology
                  meets intelligence, and ideas become reality!
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
