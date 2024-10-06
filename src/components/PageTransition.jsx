// // PageTransition.js
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const PageTransition = ({ children }) => {
//   const location = useLocation();
//   const [isOverlayVisible, setOverlayVisible] = useState(false);
//   const [isAnimating, setAnimating] = useState(false);

//   useEffect(() => {
//     setOverlayVisible(true); // Show the overlay on location change
//     setAnimating(true); // Start the animation

//     const timer = setTimeout(() => {
//       setOverlayVisible(false); // Hide the overlay after the animation duration
//       setAnimating(false); // Reset animation state
//     }, 1000); // Adjust duration to match the CSS transition

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [location]);

//   return (
//     <>
//       {isOverlayVisible && (
//         <div
//           id="transition-overlay"
//           className={`transition-overlay ${isAnimating ? "slide-down" : ""}`}
//         ></div>
//       )}
//       {children}
//     </>
//   );
// };

// export default PageTransition;
