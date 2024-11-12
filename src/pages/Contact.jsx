import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Eyeballs from "../components/Eyeballs";
import Footer from "../components/Footer";
import transition from "../transition";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    goal: "",
    date: "",
    budget: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Demo");
  };

  return (
    <div>
      <div className="bg-white/70 min-h-screen flex items-center justify-center py-24 sm:rounded-b-3xl z-10">
        <div className="bg-white shadow-md rounded-lg py-6 px-8 mx-5 max-w-4xl w-[900px] h-auto">
          <h1 className="text-2xl font-sans text-[#212121] mb-16 w-full text-center">
            Let’s Work Together!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-[15px] rounded-md border-gray-400 bg-[#f3f4f6]/40 shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-md font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  placeholder="Your company name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Goal */}
              <div>
                <label
                  htmlFor="goal"
                  className="block text-md font-medium text-gray-700"
                >
                  Project Goal
                </label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  placeholder="What's your goal?"
                  required
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-md font-medium text-gray-700"
                >
                  Completion Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-md font-medium text-gray-700"
                >
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  required
                >
                  <option value="">Select a budget range</option>
                  <option value="0-500">$3000 - $8000</option>
                  <option value="500-1000">$8000 - $15000</option>
                  <option value="1000-5000">$15000 - $20000+</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-md font-medium text-gray-700"
              >
                Additional Details (Optional)
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-400 bg-[#f3f4f6]/40 p-[15px] shadow-sm focus:border-[#212121] focus:ring-[#212121] text-md"
                placeholder="Tell us more about your project..."
              />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start">
              <input
                id="privacy-policy"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-[#212121]"
                required
              />
              <label
                htmlFor="privacy-policy"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree with the{" "}
                <a href="#" className="text-[#005FCC] hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <div className="flex justify-end">
              <motion.button
                className="flex gap-5 items-center pl-5 pr-2 py-2 bg-[#212121] rounded-full text-white uppercase"
                initial="rest"
                whileHover="hover"
                variants={{
                  hover: {
                    backgroundColor: "black",
                  },
                }}
              >
                Send inquiry
                <motion.div
                  className={`w-9 h-9 border-[1px] flex items-center justify-center rounded-full border-white`}
                  variants={{
                    rest: {
                      scale: 1,
                      borderRadius: "50%",
                      backgroundColor: "#212121",
                      color: "white",
                    },
                    hover: {
                      scale: 1.2,
                      borderRadius: ["50%", "50%", "50%"],
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <MdOutlineArrowOutward size={"1.3em"} />
                </motion.div>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      <div data-scroll data-scroll-speed="-.1" className="h-[60vh] relative">
        <Eyeballs />
      </div>
        <Footer />
    </div>
  );
}


export default transition(ContactForm);