import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Services from "./pages/Services";
import Work from "./pages/Work";

function App() {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1130) {
        if (!scrollInstance) {
          const newScroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
          });
          setScrollInstance(newScroll);
        }
      } else {
        if (scrollInstance) {
          scrollInstance.destroy();
          setScrollInstance(null);
        }
      }
    };
    handleScroll();

    window.addEventListener("resize", handleScroll);
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollInstance]);

  return (
    <div data-scroll-container className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
