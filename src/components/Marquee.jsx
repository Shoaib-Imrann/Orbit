import { motion } from "framer-motion";
import React from "react";

function Marquee(props) {
  return (
    <div
      data-scroll
      data-scroll-section-none
      data-scroll-speed=".1"
      className="w-full py-10 sm:py-3 md:py-5 xl:py-20 h-[50vw] sm:h-[33vw] rounded-t-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 pt-[18px] border-white/20 flex whitespace-nowrap overflow-hidden sm:mt-[35px]">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className='text-[33vw] sm:text-[30vw] md:text-[29vw] xl:text-[478px] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase text-white -mb-8 sm:-mb-16 md:-mb-24 xl:-mb-40 h-auto pr-20'
        >
          {props.text}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className='text-[33vw] sm:text-[30vw] md:text-[29vw] xl:text-[478px] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase text-white -mb-8 sm:-mb-16 md:-mb-24 xl:-mb-40  h-auto pr-20'
        >
          {props.text}
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
