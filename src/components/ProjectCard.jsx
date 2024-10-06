import { motion } from "framer-motion";
import React from "react";

function ProjectCard(props) {
  function HandleClick() {
    alert("This is a demo!");
  }
  return (
    <div>
      <div className="relative cardcontainer sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:h-[550px] lg:w-[550px] xl:w-[675px] xl:h-[650px] mb-5 cursor-pointer rounded-xl">
        <motion.div
          className="card w-full h-full rounded-2xl overflow-hidden"
          onClick={HandleClick}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 0.95 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={props.data}
            alt="Project"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 },
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCard;
