import React from "react";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import NumberCards from "../components/NumberCards";

function Services() {
  return (
    <div>
      <div className="">
        <h1 className='pt-40 sm:pt-52 h-[220px] sm:h-[290px] lg:h-[350px] uppercase text-[62px] sm:text-[90px] lg:text-[152px] px-5 lg:px-[70px] font-["Founders_Grotesk_X-Condensed"] font-semibold'>
          Services
        </h1>
        <p className=" mt-5 text-[#898989]/50 px-5 lg:px-[80px]">
          These are just texts
        </p>
        <div
          className={`w-full mt-5 border-b-[1px] border-zinc-400 pb-8`}
        ></div>
        <div className="text-3xl sm:text-4xl w-[80%] lg:w-[60%] lg:pl-[70px]  lg:pt-20 pb-5 pt-10 px-5 lg:px-10">
          <p>
            We craft <span className="underline ">visually</span> striking and{" "}
            <span className="underline">impactful</span> presentations that
            inform, inspire, and drive action.
          </p>
        </div>
        <div
          className={`w-full mt-5 border-b-[1px] border-zinc-400 pb-8`}
        ></div>
        <div className="text flex flex-col md:flex-row gap-5 w-full justify-between mt-10 px-5 lg:px-10 lg:pl-[70px] lg:pr-10 mb-20">
          <div className="text1">
            <p className="text-xl">Orbit in numbers:</p>
          </div>
          <div className="w-full md:w-[68%] lg:w-[55%] flex flex-col md:flex-row justify-center gap-5 flex-wrap">
            <NumberCards
              numbers={"100+"}
              text={"Client from 17 Countries"}
              color={"bg-[#E1E1E1]"}
            />
            <NumberCards
              numbers={"$250+"}
              text={"Million raised for our clients"}
              color={"bg-[#E1E1E1]"}
            />
            <NumberCards
              numbers={"90%"}
              text={"Of our clients come back"}
              color={"bg-[#E1E1E1]"}
            />
            <NumberCards
              numbers={"98%"}
              text={"Net Promoting Score"}
              color={"bg-[#E1E1E1]"}
            />
          </div>
        </div>
        <Marquee text={"why only us"} />
        <div className="w-full h-full lg:h-[115vh] bg-[#212121]  pb-20 pt-10 lg:pt-32 lg:-mt-24 rounded-b-2xl">
          <div className="text flex flex-col md:flex-row gap-5 w-full justify-between mt-5 lg:pl-[70px] px-5 lg:px-10 lg:pr-10  mb-20">
            <div className="text1">
              <p className="text-2xl text-white">What you can expect:</p>
            </div>
            <div className="w-full md:w-[68%] lg:w-[55%] flex flex-col md:flex-row justify-center gap-5 flex-wrap">
              <NumberCards
                numbers={"01"}
                text={"Communication"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
              <NumberCards
                numbers={"02"}
                text={"Bangalore business"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
              <NumberCards
                numbers={"03"}
                text={"Holistic Approach"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
              <NumberCards
                numbers={"04"}
                text={"One Point of Contact"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
              <NumberCards
                numbers={"05"}
                text={"Constantly Improving"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
              <NumberCards
                numbers={"06"}
                text={"Limited Amount of Clients"}
                visibility={"underline underline-offset-4"}
                color={"bg-white/90"}
              />
            </div>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Services;
