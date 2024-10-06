import { motion } from "framer-motion";
import React from "react";
import img8 from "../assets/images/img8.jpeg";
import LaunchButton from "./LaunchButton";

function About() {
  return (
    <div className=" w-screen flex flex-col justify-evenly sm:justify-center h-[110vh] sm:h-[80vh] lg:-mt-24 lg:h-[115vh] md:pt-5 bg-[#212121] rounded-b-2xl">
      <h1 className="text-[28px] sm:text-[30px] xl:text-[40px] xl:leading-[55px] text-white w-full sm:w-[80vw] px-5 xl:px-32 pb-7 xl:pb-20 xl:pt-36 ">
        Orbit is a presentation agency that empowers
        <span className="border-b-2 border-white">
          {" "}
          innovative businesses
        </span>{" "}
        to secure funding,{" "}
        <span className="border-b-2 border-white">boost sales</span>, simplify
        complex concepts, and{" "}
        <span className="border-b-2 border-white">
          attract exceptional talent
        </span>
        .
      </h1>
      <div className="flex flex-col sm:flex-row w-full border-t-[1px] text-[#212121] pb-8 md:pb-10 pt-10  px-8 md:px-8 xl:px-32 border-zinc-600">
        <div className="w-1/2">
          <h1 className="text-[29px] md:text-[40px] text-white ">
            Our approach:
          </h1>
          <LaunchButton
            goto={"/about"}
            data={"Read More"}
            color1={"#fafafa"}
            color2={"#212121"}
            iconclr2={"#212121"}
            iconclr1={"#fafafa"}
            brColor={"border-[#212121]"}
          />
        </div>
        <motion.div
          className="w-full sm:w-1/2 h-[70%] sm:h-full mt-16 sm:mt-0 rounded-2xl overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1 },
          }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.img
            className="w-full h-full bg-cover rounded-2xl border-none"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            src={img8}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
