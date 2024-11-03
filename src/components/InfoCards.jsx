import React from "react";
import { FaStar } from "react-icons/fa";

function InfoCards(props) {
  return (
    <>
      <div
        className={`${props.visibility} w-full px-5 xl:px-14 border-b-[1px] border-zinc-400 pb-4 xl:pb-8 mt-20 `}
      >
        <h1 className="text-[31px] md:text-[40px] xl:text-[61px] font-sans">
          Reviews
        </h1>
      </div>
      <div className="w-full mb-12 xl:mb-28 mt-10 xl:mt-28 flex flex-col xl:flex-row gap-5 px-5 xl:px-14 ">
        <div className="cardcontainer h-[300px] md:h-[380px] xl:h-[400px] w-full xl:w-1/2">
          <div className=" relative card  rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
            <p className="text-[55px] xl:text-[60px] text-white/90">
              Orbit
            </p>
            <div className="cursor-not-allowed absolute px-3 rounded-full py-1 border-[1px] left-5 bottom-5 text-white font-['serif']">
              &copy; 2024
            </div>
          </div>
        </div>
        <div className="cardcontainer flex  flex-col sm:flex-row gap-5 h-full md:h-[380px] xl:h-[400px] w-full xl:w-1/2">
          <div className="relative card w-full h-[300px] md:w-1/2 rounded-xl md:h-full bg-[#212121] flex justify-center items-center">
            <div className="first">
              <p className="text-[52px] xl:text-[60px] text-white/90">
                Orbit
              </p>
              <div className="stars flex justify-around w-[75%] ml-5 items-center">
                <FaStar color="#CDEA67" size={"0.9em"} />
                <FaStar color="#CDEA67" size={"0.9em"} />
                <FaStar color="#CDEA67" size={"0.9em"} />
                <FaStar color="#CDEA67" size={"0.9em"} />
                <FaStar color="#CDEA67" size={"0.9em"} />
              </div>
            </div>
            <div className="cursor-not-allowed absolute px-3 rounded-full py-1 border-[1px] left-5 bottom-5  text-white font-['serif'] ">
              RATING 5.0
            </div>
          </div>
          <div className="relative card h-[300px] w-full md:w-1/2 md:h-full rounded-xl bg-[#212121] flex justify-center items-center">
            <p className="text-[52px] xl:text-[60px] text-white/90">
              Orbit
            </p>
            <div className="cursor-not-allowed absolute px-3 rounded-full py-1 border-[1px] left-5 bottom-5 text-white font-['serif']">
              BUSINESS
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCards;
