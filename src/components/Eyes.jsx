import React from "react";
import Eyeballs from "./Eyeballs";

function Eyes() {
  return (
    <div className="eyes w-full h-[35vh] sm:h-[65vh] md:h-screen lg:overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className={`relative w-full h-full lg:w-full lg:h-full bg-no-repeat bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]`}
      >
        <Eyeballs />
      </div>
    </div>
  );
}

export default Eyes;
