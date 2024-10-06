import React, { useEffect, useState } from "react";

function Eyeballs() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerWidth / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div>
      <div className="absolute gap-10 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] overflow-hidden">
        <div className="flex items-center justify-center h-[23vw] w-[23vw] sm:h-[17vw] sm:w-[17vw] md:w-[15vw] md:h-[15vw] lg:w-[12vw] lg:h-[12vw] bg-white rounded-full">
          <div className="relative h-[15vw] w-[15vw] sm:h-[11vw] sm:w-[11vw] md:w-[9vw] md:h-[9vw] lg:w-[8vw] lg:h-[8vw] rounded-full bg-zinc-800">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 rounded-md"
            >
              <div className="w-[3.5vw] h-[3.5vw] sm:w-[2.7vw] sm:h-[2.7vw] md:w-[2vw] md:h-[2vw] lg:w-[1.3vw] lg:h-[1.3vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-[23vw] w-[23vw] sm:h-[17vw] sm:w-[17vw] md:w-[15vw] md:h-[15vw] lg:w-[12vw] lg:h-[12vw] bg-white rounded-full">
          <div className="relative h-[15vw] w-[15vw] sm:h-[11vw] sm:w-[11vw] md:w-[9vw] md:h-[9vw] lg:w-[8vw] lg:h-[8vw] rounded-full bg-zinc-800">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 rounded-md"
            >
              <div className="w-[3.5vw] h-[3.5vw] sm:w-[2.7vw] sm:h-[2.7vw] md:w-[2vw] md:h-[2vw] lg:w-[1.3vw] lg:h-[1.3vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyeballs;
