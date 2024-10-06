import React from "react";
import img10 from "../assets/images/img10.jpeg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import Eyes from "../components/Eyes";
import Footer from "../components/Footer";
import InsightsCard from "../components/InsightsCard";
import Marquee from "../components/Marquee";
import ProjectButton from "../components/ProjectButton";

function Insights() {
  return (
    <div>
      <div className="pt-48">
        <h1 className='text uppercase text-[100px] lg:text-[152px] px-5 lg:px-[70px] font-["Founders_Grotesk_X-Condensed"] font-semibold lg:pb-10'>
          Insights
        </h1>
        <div className={`w-full  border-b-[1px] border-zinc-400 pb-8`}></div>
      </div>
      <div className="text flex flex-col sm:flex-row gap-5 w-full justify-between mt-10 px-5 lg:pl-[70px] lg:pr-10 mb-20 lg:mb-28">
        <div className="text1">
          <p className="text-xl">Latest:</p>
        </div>
        <div className="w-full sm:w-[55%] h-fit lg:h-[100px] flex gap-3 flex-wrap">
          <ProjectButton data={"ALL"} />
          <ProjectButton data={"news"} />
          <ProjectButton data={"pitch deck"} />
          <ProjectButton data={"presentation agency"} />
          <ProjectButton data={"template"} />
          <ProjectButton data={"public speaking"} />
          <ProjectButton data={"story telling"} />
        </div>
      </div>
      <div className="relative rounded-t-none">
        <Marquee text={"The Highlights"} />
      </div>
      <div className="mt-10 mb-20 flex flex-wrap justify-evenly gap-2 lg:gap-3 p-5 lg:p-10">
        <div className="box1 flex flex-col gap-5 w-[390px]">
          <InsightsCard
            height={"lg:h-[385px]"}
            width={"lg:w-[385px]"}
            data={img10}
          />
          <p className="px-2 text-lg">
            Why hiring a presentation agency will boost your business
          </p>
          <p className="px-2 text-[#898989]">By Gulyah Ihor - 24 Aug. 09</p>
        </div>
        <div className="box2 flex flex-col gap-5 w-90">
          <InsightsCard
            height={"h-[240px] lg:h-[315px]"}
            width={"w-[320px] lg:w-[385px]"}
            data={img11}
          />
          <p className="px-2 text-lg">
            Fuel your day with the healthy smoothie bowls .
          </p>
          <p className="px-2 text-[#898989]">Order through the site.</p>
        </div>
        <div className="box3 flex flex-col gap-5">
          <InsightsCard height={"h-[425px]"} width={"w-[385px]"} data={img12} />
          <p className="px-2 text-lg">The art of designing incredible.</p>
          <p className="px-2 text-[#898989]">By Gulyah Ihor - 24 Aug. 09</p>
        </div>
        <div className="box4 flex flex-col gap-5">
          <InsightsCard height={"h-[285px]"} width={"w-[385px]"} data={img13} />
          <p className="px-2 text-lg">Developing company wide presentations.</p>
          <p className="px-2 text-[#898989]">
            Creating organization-level slideshows.
          </p>
        </div>
      </div>
      <div>
        <Eyes />
      </div>
      <div data-scroll data-scroll-speed="-.9" className="lg:-mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Insights;
