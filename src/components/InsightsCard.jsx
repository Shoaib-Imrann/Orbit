import { motion } from "framer-motion";
import React from "react";

function ProjectCard(props) {
  function HandleClick() {
    alert("This is a demo!");
  }
  return (
    <div
      className={`relative cardcontainer ${props.height} ${props.width} cursor-pointer rounded-xl`}
    >
      <motion.div
        className="card w-auto h-full rounded-2xl overflow-hidden"
        onClick={HandleClick}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.img
          className="w-full h-full object-cover"
          src={props.data}
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
  );
}

export default ProjectCard;
