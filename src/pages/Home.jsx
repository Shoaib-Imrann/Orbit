import React from "react";
import About from "../components/About";
import Cta from "../components/Cta";
import Eyes from "../components/Eyes";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import InfoCards from "../components/InfoCards";
import LandingPage from "../components/LandingPage";
import Marquee from "../components/Marquee";

function Home() {
  return (
    <div>
      <LandingPage />
      <Marquee text={"WE ARE ORBIT"} />
      <About />
      <Eyes />
      <Featured text={"Featured Projects"} textsize={"text-[61px]"} />
      <InfoCards />
      <Cta/>
      <div data-scroll data-scroll-speed="-.9" className="lg:-mt-20">
      <Footer />
      </div>
    </div>
  );
}

export default Home;
