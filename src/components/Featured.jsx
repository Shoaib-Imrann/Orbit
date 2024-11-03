import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import LaunchButton from "./LaunchButton";
import ProjectButton from "./ProjectButton";
import ProjectCard from "./ProjectCard";

function Featured(props) {
  return (
    <div className="w-full min-h-screen py-6 xl:py-20 bg-[#f1f1f1] rounded-t-3xl">
      <h1
        className={`sm:pt-10 pb-2 text-[25px] outfit-font md:text-[50px] xl:${props.textsize} px-8 xl:px-14 w-full leading-[40px] md:leading-[65px]  `}
      >
        {props.text}
      </h1>
      <div
        className={`${props.visibility} w-full  border-b-[1px] border-zinc-400`}
      ></div>
      <div className="px-8 xl:px-2 py-5 xl:py-20 ">
        <div className="first flex flex-col gap-10 md:gap-20 xl:gap-20">
          <div className="cards w-full flex flex-col sm:flex-row sm:justify-evenly md:flex-row md:justify-evenly gap-5 ">
            <div className="overall">
              <div className="text1 flex justify-start items-center">
                <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                <h4 className="uppercase text-[14px] xl:text-[16px] p-3 xl:p-5">
                  inside out
                </h4>
              </div>
              <ProjectCard data={img4} />
              <div className="buttons flex gap-2 xl:gap-5">
                <ProjectButton data={"audit"} />
                <ProjectButton data={"copywriting"} />
                <ProjectButton data={"sales deck"} />
              </div>
            </div>
            <div className="overall">
              <div className="text1 flex justify-start items-center">
                <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                <h4 className="uppercase text-[14px] xl:text-[16px] p-3 xl:p-5">
                  Grid
                </h4>
              </div>
              <ProjectCard data={img2} />
              <ProjectButton data={"pitch deck"} />
            </div>
          </div>
          <div className="second">
            <div className="cards w-full flex flex-col sm:flex-row sm:justify-evenly md:flex-row md:justify-evenly gap-5 ">
              <div className="overall">
                <div className="text1 flex justify-start items-center">
                  <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                  <h4 className="uppercase text-[14px] xl:text-[16px] p-3 xl:p-5">
                    BlackB
                  </h4>
                </div>
                <ProjectCard data={img6} />
                <div className="buttons flex gap-2 xl:gap-5">
                  <ProjectButton data={"sales deck"} />
                </div>
              </div>
              <div className="overall">
                <div className="text1 flex justify-start items-center">
                  <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                  <h4 className="uppercase text-[14px] xl:text-[16px] p-3 xl:p-5">
                    soft
                  </h4>
                </div>
                <ProjectCard data={img7} />
                <div className="buttons flex gap-2 xl:gap-5">
                  <ProjectButton data={"review"} />
                  <ProjectButton data={"redesign"} />
                  <ProjectButton data={"investor deck"} />
                </div>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="cards w-full flex flex-col sm:flex-row sm:justify-evenly md:flex-row md:justify-evenly gap-5 ">
              <div className="overall">
                <div className="text1 flex justify-start items-center">
                  <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                  <h4 className="uppercase text-[14px] xl:text-[16px]  p-3 xl:p-5">
                    doconut
                  </h4>
                </div>
                <ProjectCard data={img1} />
                <div className="buttons flex gap-2 xl:gap-5">
                  <ProjectButton data={"branded template"} />
                  <ProjectButton data={"sales deck"} />
                </div>
              </div>

              <div className="overall">
                <div className="text1 flex justify-start items-center">
                  <div className="w-3 h-3 bg-[#212121] rounded-full"></div>
                  <h4 className="uppercase text-[14px] xl:text-[16px] p-3 xl:p-5">
                    the wind
                  </h4>
                </div>
                <ProjectCard data={img5} />
                <div className="buttons flex gap-2 xl:gap-5">
                  <ProjectButton data={"agency"} />
                  <ProjectButton data={"investor deck"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${props.visibility} flex justify-center items-center`}>
        <LaunchButton
          goto={"/work"}
          data={"View all case studies"}
          color1={"#212121"}
          color2={"white"}
          iconclr2={"white"}
          iconclr1={"#212121"}
        />
      </div>
    </div>
  );
}

export default Featured;
