import React from "react";
import Cta from "../components/Cta";
import Eyeballs from "../components/Eyeballs";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

function Work() {
  return (
    <div className="w-full h-screen bg-[#f1f1f1]">
      <div className="flex flex-col w-full h-[58vh] sm:h-[68vh] bg-gray-400 pt-32 sm:pt-40">
        <div>
          <h1 className='worktext uppercase text-[120px] sm:text-[152px] px-5 flex justify-center sm:justify-start items-center w-full sm:px-[70px] font-["Founders_Grotesk_X-Condensed"] font-semibold'>
            Work
          </h1>
          <div>
            <Eyeballs />
          </div>
        </div>
        <div className="flex flex-col  h-full justify-end items-center z-50">
          <div className="w-[80%] h-[33px] sm:h-[48px] bg-[#343434] rounded-t-xl"></div>
          <div className="w-[95%] h-[38px] sm:h-[48px] bg-[#282828] rounded-t-xl"></div>
        </div>
      </div>
      <Featured
      visibility={"hidden"}
        text={
          "PROJECTS"
        }
        textsize={"text-[50px]"}
        
      />
      <Marquee text={"PERFECTION"} />
      <div>
        <Cta/>
      </div>
      <div data-scroll data-scroll-speed="-.9" className="lg:-mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Work;


