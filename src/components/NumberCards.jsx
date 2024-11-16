import React from "react";
import { useInView } from "react-intersection-observer";
import {motion, useAnimation} from 'framer-motion'


function NumberCards(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  if (inView) {
      controls.start({ y: 0 });
  }
  return (
    <div className="overflow-hidden">
      <div
        className={`h-[215px] w-full md:w-[230px] xl:h-[250px] xl:w-[320px] ${props.color} rounded-xl`}
      >
        <div className="flex flex-col justify-between h-full w-full pt-2 pb-5 px-5 overflow-hidden">
        <motion.div
              ref={ref}
              className=""
              initial={{ y: "-100%" }}
              animate={controls}
              exit={{ y: "100%" }}
              transition={{ duration: 1, ease: [0.42, 1, 0.36, 1], delay: 0 }}
          >
          <div className="h-auto ">
            <h1 className="text-[52px] xl:text-[65px] font-sans">
              {props.numbers}
            </h1>
          </div>
          </motion.div>
          <div>
            <h4 className={`text-[15px] xl:text-[19px] ${props.visibility}`}>
              {props.text}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberCards;
