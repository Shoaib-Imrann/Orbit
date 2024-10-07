import React from "react";
import LaunchButton from "./LaunchButton";

function Cta() {
  return (
    <div className="w-full sm:pt-20 sm:rounded-t-xl z-50 relative lg:h-[115vh] ">
      <div
        data-scroll
        data-scroll-speed=".4"
        className={`relative w-full h-fit lg:w-full lg:h-full`}
      >
        <div className="flex flex-col bg-[#212121] gap-5 sm:rounded-xl h-[60vh] sm:h-screen lg:h-[135vh] items-center justify-evenly w-full px-5 md:px-20 pb-20 pt-20 uppercase font-semibold ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[78px] sm:text-[120px] md:text-[180px] lg:text-[210px] xl:text-[260px] text-[#f1f1f1] font-['Founders_Grotesk_X-Condensed'] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px]">
              Ready
            </h1>
            <h1 className="text-[78px] sm:text-[120px] md:text-[180px] lg:text-[210px] xl:text-[260px] text-[#f1f1f1] font-['Founders_Grotesk_X-Condensed'] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px]">
              to start{" "}
            </h1>
            <h1 className="text-[78px] sm:text-[120px] md:text-[180px] lg:text-[210px] xl:text-[260px] text-[#f1f1f1] font-['Founders_Grotesk_X-Condensed'] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px]">
              the project?
            </h1>
          </div>
          <div className=" z-50">
            <LaunchButton
              goto={"/contact"}
              data={"TAKE ME!"}
              color1={"#fafafa"}
              color2={"#212121"}
              iconclr2={"#212121"}
              iconclr1={"#fafafa"}
              brColor={"border-[#212121]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
