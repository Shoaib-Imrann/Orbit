import { motion } from "framer-motion";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div
        className="flex justify-evenly md:justify-between flex-col gap-5 w-full h-screen sm:rounded-t-3xl bg-white"
        data-scroll
        data-scroll-speed=".9"
      >
        <div className=" w-full flex flex-col justify-center items-center md:flex-row h-fit md:justify-between px-5 md:px-10 md:mt-20 lg:px-14 pt-14 md:py-5 lg:pt-16 ">
          <div className="heading">
            <h1 className='font-["Founders_Grotesk_X-Condensed"] text-[72px] lg:text-[9vw] uppercase leading-none text-[#212121] font-semibold'>
              Impactful
            </h1>
          </div>
          <h1 className=' font-["Founders_Grotesk_X-Condensed"] md:w-1/2 text-[72px] lg:text-[9vw] uppercase leading-none text-[#212121] font-semibold'>
            Presentations
          </h1>
        </div>
        <div className="w-full md:px-10 lg:px-14 flex flex-col gap-10 items-center md:items-end md:flex-row md:justify-between md:mb-28 lg:mb-20 h-fit pt-5 xl:pt-0 xl:mb-28">
          <a href="#" className="text-4xl flex items-end">
            Orbit
          </a>
          <div className="h-fit flex items-center gap-5 md:justify-center md:w-1/2 lg:w-1/2 flex-col md:items-start lg:items-start">
            <div className="flex items-end justify-start h-full socials gap-3 text-[19px]">
              <motion.div
                whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                transition={{ duration: 0.2 }}
                className="flex text-md justify-center items-center gap-2 cursor-pointer"
              >
                <FaSquareXTwitter size={"1.2em"} />
                <a href="#" className="font-thin"></a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, color: "#0A66C2" }}
                transition={{ duration: 0.2 }}
                className="flex text-md justify-center items-center gap-2 cursor-pointer"
              >
                <FaLinkedin size={"1.2em"} />
                <a href="#" target="_blank" className="font-thin"></a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, color: "#E1306C" }}
                transition={{ duration: 0.2 }}
                className="flex text-md justify-center items-center gap-2 cursor-pointer"
              >
                <RiInstagramFill size={"1.2em"} />
                <a href="#" target="_blank" className="font-thin"></a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, color: "#1877F2" }}
                transition={{ duration: 0.2 }}
                className="flex text-md justify-center items-center gap-2 cursor-pointer"
              >
                <AiFillFacebook size={"1.2em"} />
                <a href="#" className="font-thin"></a>
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row items-center sm:justify-between md:items-end w-full h-[50px] text-[#B2B2B2] text-[19px]">
              <p className="font-['serif']">&copy; Orbit 2024.</p>
              <p className="font-['serif']">Inspired by ochi.design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
