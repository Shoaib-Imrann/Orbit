import { motion } from "framer-motion";
import React from "react";
import img8 from "../assets/images/img8.jpeg";
import mask from "../assets/images/mask.jpg";
import Cta from "../components/Cta";
import Eyeballs from "../components/Eyeballs";
import Footer from "../components/Footer";
import InfoCards from "../components/InfoCards";
import LaunchButton from "../components/LaunchButton";
import Marquee from "../components/Marquee";

function About() {
  return (
    <>
      <div className="h-full lg:h-screen">
        <div className="landingtext mt-40 sm:mt-36 lg:mt-52 px-5 sm:px-10 lg:px-[70px]">
          {["We are" ,"Orbit"].map((item, index) => (
            <div className="masker rounded-sm" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{ ease: [0.8, 0, 0.3, 1], duration: 1 }}
                    className="w-[20vw] h-[10vw]  sm:h-[6.6vw] relative -top-[2.8vw] sm:-top-[1.8vw] mr-2 sm:mr-3 rounded-sm sm:rounded-sm"
                    style={{
                      backgroundImage: `url(${mask})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <img
                      className="rounded-md object-cover"
                      src={mask}
                      alt="img"
                    /> */}
                  </motion.div>
                )}
                <h1 className="font-['Founders_Grotesk_X-Condensed'] text-[15vw] sm:text-[10vw] leading-[11vw] sm:leading-[7.3vw] font-semibold uppercase text-[#212121]">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-full mt-5 lg:mt-20 border-b-[1px] border-zinc-400 pb-8`}
        ></div>
        <div className="text flex flex-col sm:flex-row gap-5 w-full justify-between mt-5 lg:mt-10 p-5 sm:p-10 mb-44 sm:mb-32">
          <div className="text1">
            <p>About Us</p>
          </div>
          <div className="text2 w-[90%] sm:w-[40%] lg:w-[30%]">
            <p className="text-md lg:text-lg">
              As a Bangalore-based company, Orbit embodies the spirit of
              innovation and creativity. We believe that the most profound
              messages are often conveyed through visuals rather than words. At
              Orbit, we are committed to creating captivating experiences that
              engage and inspire, showcasing the beauty of communication in its
              most impactful form.
            </p>
          </div>
          <LaunchButton
            goto={"/work"}
            data={"Our Works"}
            color1={"#212121"}
            color2={"white"}
            iconclr2={"white"}
            iconclr1={"#212121"}
          />
        </div>
      </div>
      <div className="relative z-10">
        <Eyeballs />
      </div>
      <div className="relative flex justify-center items-start lg:items-center w-full h-full lg:h-[105vh] px-5 pt-16 sm:p-20 -mt-10 cursor-pointer rounded-2xl">
        <motion.div
          className="card w-full h-[40vh] sm:h-[50vh] lg:h-full rounded-2xl overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 0.98 },
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={img8}
            alt="img"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      </div>
      <div className="mb-32">
        <InfoCards visibility={"hidden"} />
      </div>
      <div>
        <Marquee text={"the team matters"} />
      </div>
      <div>
        <Cta/>
      </div>
      <div data-scroll data-scroll-speed="-.9" className="lg:-mt-20">
        <Footer />
      </div>
    </>
  );
}

export default About;
