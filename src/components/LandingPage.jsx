import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import mask from "../assets/images/mask.jpg";

function LandingPage() {
  const handleClick = () => {
    window.location.href = "/contact";
  };
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full h-full pt-1  bg-[#f1f1f1] "
    >
      <div className="landingtext pt-52 px-[30px] lg:px-[70px]">
        {["We Design", "Impactful", "presentations"].map((item, index) => (
          <div className="masker bg-gray-200 rounded-md">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "10vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className={`w-[20vw] h-[10vw]  sm:h-[5.8vw] relative -top-[2.8vw] sm:-top-[1.7vw] mr-2 sm:mr-3 rounded-sm sm:rounded-sm`}
                  style={{
                    backgroundImage: `url(${mask})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img className="rounded-sm object-cover" src={mask} alt="img" /> */}
                </motion.div>
              )}
              <h1 className="font-['Founders_Grotesk_X-Condensed'] text-[15vw] sm:text-[9vw] leading-[11vw] sm:leading-[6.8vw] font-semibold uppercase text-[#212121]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-[205px] md:mt-[190px] xl:mt-[220px] flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center py-5 px-[30px] lg:px-[70px]">
        {["For businesses and organizations"].map((item, index) => (
          <p className="text-[#212121] font-['Mate'] text-lg font-light leading-[1.6vw]">
            {item}
          </p>
        ))}
        <motion.div
          className="start flex gap-2 items-center"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            onClick={handleClick}
            className="font-['Mate'] px-4 py-1 border-[1px] border-black rounded-full uppercase text-[#212121] cursor-pointer shadow-lg"
            variants={{
              rest: { backgroundColor: "#f1f1f1", color: "#212121" },
              hover: { backgroundColor: "#212121", color: "#ffffff" },
            }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            start the project
          </motion.div>
          <motion.div
            className="w-9 h-9 border-[1px] flex items-center justify-center border-black rounded-full cursor-pointer shadow-lg"
            variants={{
              rest: {
                scale: 1,
                borderRadius: "50%",
                backgroundColor: "#f1f1f1",
              },
              hover: {
                scale: 1.25,
                borderRadius: ["50%", "50%", "50%"],
                backgroundColor: "#212121",
                color: "white",
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <MdOutlineArrowOutward size={"1.3em"} />
          </motion.div>
        </motion.div>
      </div>
      <motion.p
        className="font-['sans-serif'] text-[19px] text-[#b6b6b6] mt-5 mb-10 text-center"
        animate={{
          y: [0, 20, 0],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        Scroll down
      </motion.p>
    </div>
  );
}

export default LandingPage;
