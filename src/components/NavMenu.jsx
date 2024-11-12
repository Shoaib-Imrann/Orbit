import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function NavMenu({ handleMenuToggle }) {
  return (
    <div className="fixed inset-0 p-6 z-[1000] bg-primary h-[115vh] w-screen">
      <div className=" flex justify-between px-3">
        <div className="logo">
          <NavLink
            to="/"
            className="text-4xl text-white"
            onClick={handleMenuToggle}
          >
            Orbit
          </NavLink>
        </div>
        <button className="p-2 md:hidden" onClick={handleMenuToggle}>
          <FaXmark size={"1.3em"} color="white" />
        </button>
      </div>
      <div className="border-t-[1px] mt-8 border-zinc-600"></div>
      <div className="mt-12 flex flex-col gap-8">
        <NavLink
          to="/about"
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline-custom" : ""
            } `
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline-custom" : ""
            } `
          }
          onClick={handleMenuToggle}
        >
          Services
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline-custom" : ""
            } `
          }
          onClick={handleMenuToggle}
        >
          Our Work
        </NavLink>
        <NavLink
          to="/insights"
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline-custom" : ""
            } `
          }
          onClick={handleMenuToggle}
        >
          Insights
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline-custom" : ""
            } `
          }
          onClick={handleMenuToggle}
        >
          Contact Us
        </NavLink>
        <div className="px-3">
          <div className="flex justify-center w-fit items-center gap-3 px-4 py-3 rounded-lg bg-white">
            <a
              href="https://github.com/Shoaib-Imrann/Orbit"
              target="_blank"
              className="text-lg font-semibold font-helvetica"
            >
              Repository
            </a>
            <FaGithub size={"1.3em"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
