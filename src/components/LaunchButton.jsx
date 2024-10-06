import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function LaunchButton(props) {
  const handleClick = () => {
    window.location.href = props.goto;
  };
  return (
    <div>
      <motion.button
        onClick={handleClick}
        className="flex gap-3 items-center text-[14px] md:text-[16px] pl-3 md:pl-5 pr-2 xl:pr-3 py-2 xl:py-3 bg-[#fafafa] mt-6  lg:mt-8 rounded-full text-[#212121] uppercase shadow-lg"
        initial="rest"
        whileHover="hover"
        variants={{
          rest: {
            scale: 1,
            backgroundColor: props.color1,
            color: props.color2,
          },
          hover: {
            scale: 1.1,
            backgroundColor: props.color1,
            color: props.color2,
          },
        }}
      >
        {props.data}
        <motion.div
          className={`w-6 lg:w-9 h-6 lg:h-9 border-[1px] flex items-center justify-center rounded-full  ${props.brColor}`}
          variants={{
            rest: {
              scale: 1,
              borderRadius: "50%",
              backgroundColor: props.iconclr1,
              color: props.iconclr2,
            },
            hover: {
              scale: 1.4,
              borderRadius: ["50%", "50%", "50%"],
              backgroundColor: props.iconclr2,
              color: props.iconclr1,
            },
          }}
          transition={{
            duration: 0.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <MdOutlineArrowOutward size={"1.2em"} />
        </motion.div>
      </motion.button>
    </div>
  );
}

export default LaunchButton;
