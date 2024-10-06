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
            className="text-4xl text-white font-semibold"
            onClick={handleMenuToggle}
          >
            Orbit
          </NavLink>
        </div>
        <button className="p-2 md:hidden" onClick={handleMenuToggle}>
          <FaXmark size={"1.3em"} color="white" />
        </button>
      </div>
      <div className="border-t-[1px] mt-20 border-zinc-600"></div>
      <div className="mt-12 flex flex-col gap-8">
        <NavLink
          to="/about"
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline underline-offset-8 " : ""
            } `
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-white text-6xl uppercase font-['Founders_Grotesk_X-Condensed'] font-semibold rounded-lg hover:bg-black/15 px-3 ${
              isActive ? "underline underline-offset-8 " : ""
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
              isActive ? "underline underline-offset-8 " : ""
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
              isActive ? "underline underline-offset-8 " : ""
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
              isActive ? "underline underline-offset-8 " : ""
            } `
          }
          onClick={handleMenuToggle}
        >
          Contact Us
        </NavLink>
        <div className="px-3">
        <motion.div
            className="flex justify-center w-fit items-center gap-3 border-[1px] px-3 py-3 rounded-md border-[#212121] bg-transparent "
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: {
                scale: 1,
                backgroundColor: "#f1f1f1",
              },
              hover: {
                scale: 1.05,
                backgroundColor: "white",
                color: "#212121",
              },
            }}
            transition={{
              duration: 0.1,
              ease: [0.85, 0, 0.15, 1],
            }}
          >
            <FaGithub size={"1.2em"}/>
            <a
              href=""
              target="_blank"
              className="uppercase text-lg font-semibold tracking-wide"
            >
              Repo
            </a>
          </motion.div>
          </div>
      </div>
    </div>
  );
}

export default NavMenu;
