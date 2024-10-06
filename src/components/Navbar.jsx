import "animate.css";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  const handleReload = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div
        className={`backdrop-blur-lg top-0 fixed z-[999] w-full px-[30px] lg:px-[70px] py-6 font-['Mate'] flex justify-between items-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="logo">
          <NavLink
            to="/"
            className="text-4xl "
            onClick={() => handleReload("/")}
          >
            Orbit
          </NavLink>
        </div>
        <button className="p-2 md:hidden" onClick={handleMenuToggle}>
          <IoMenu size={"1.3em"} />
        </button>
        {isMenuOpen && <NavMenu handleMenuToggle={handleMenuToggle} />}
        <div className="hidden md:flex justify-center items-center gap-10  cursor-pointer ">
          <motion.div
            className="flex justify-center items-center gap-2 border-[1px] px-3 py-[5px] rounded-md border-[#212121] bg-transparent shadow-lg"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: {
                scale: 1,
                backgroundColor: "transparent",
              },
              hover: {
                scale: 1.05,
                backgroundColor: "#212121",
                color: "white",
              },
            }}
            transition={{
              duration: 0.1,
              ease: [0.85, 0, 0.15, 1],
            }}
          >
            <FaGithub />
            <a
              href="https://github.com/Shoaib-Imrann/Orbit"
              target="_blank"
              className="uppercase font-sans text-sm font-semibold tracking-wide"
            >
              Repo
            </a>
          </motion.div>
          <NavLink
            to="/about"
            onClick={() => handleReload("/about")}
            className={({ isActive }) =>
              `text-[#212121] text-lg capitalize font-light transition-all duration-100 hover-underline-animation animate__animated  ${
                isActive ? "underline underline-offset-8 " : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => handleReload("/services")}
            className={({ isActive }) =>
              `text-[#212121] text-lg capitalize font-light transition-all duration-100 hover-underline-animation animate__animated ${
                isActive ? "underline underline-offset-8 " : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/work"
            onClick={() => handleReload("/work")}
            className={({ isActive }) =>
              `text-[#212121] text-lg capitalize font-light transition-all duration-100 hover-underline-animation animate__animated ${
                isActive ? "underline underline-offset-8 " : ""
              }`
            }
          >
            Our Work
          </NavLink>
          <NavLink
            to="/insights"
            onClick={() => handleReload("/insights")}
            className={({ isActive }) =>
              `text-[#212121] text-lg capitalize font-light transition-all duration-100 hover-underline-animation animate__animated ${
                isActive ? "underline underline-offset-8 " : ""
              }`
            }
          >
            Insights
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => handleReload("/contact")}
            className={({ isActive }) =>
              `text-[#212121] text-lg capitalize font-light transition-all duration-100 ml-28 hover-underline-animation animate__animated ${
                isActive ? "underline underline-offset-8 " : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
