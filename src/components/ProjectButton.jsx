import { motion } from "framer-motion";
import React from "react";

function ProjectButton(props) {
  function HandleClick() {
    alert("This is a demo!");
  }
  return (
    <motion.div
      className="px-4 py-2 border-[1px] text-[12px] sm:text-[9.5px] lg:text-[16px] border-black w-fit rounded-full uppercase text-[#212121] cursor-pointer shadow-md"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { backgroundColor: "transparent", color: "#212121" },
        hover: {
          scale: 1.1,
          backgroundColor: "#212121",
          color: "#ffffff",
        },
      }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      onClick={HandleClick}
    >
      {props.data}
    </motion.div>
  );
}

export default ProjectButton;
