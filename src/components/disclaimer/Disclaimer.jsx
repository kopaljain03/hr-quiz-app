import { useEffect, useRef } from "react";
// "use client";

// import { Carousel } from "flowbite-react";

// export default function Disclaimer() {
//   return (
//     <div className="">
//   <h1 class="flex items-center justify-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
//     Disclaimer
//   </h1>

//       <div className="mt-24 h-56 sm:h-64 xl:h-80 2xl:h-96">
//         <Carousel>
//           <div className="flex h-full items-center justify-center bg-gray-700 text-white">
//             You are a full-time HR professional/manages at a thriving
//             Organization- ABC Pvt. Ltd Recently some talented employees in your
//             team are showing signs of distress.
//           </div>
//           <div className="flex h-full items-center justify-center bg-gray-700 text-white">
//             Slide 1
//           </div>
//           <div className="flex h-full items-center justify-center bg-gray-700 text-white">
//             Slide 1
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { div } from "motion/react-client";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  const cards = [
    "You are a full-time HR professional/manages at a thriving Organization- ABC Pvt. Ltd Recently some talented employees in your team are showing signs of distress.",
    "The company has entrusted you with acquiring 100 MEDICONS by choosing the appropriate choices and creating a supportive environment thus helping the access to people resources.",
    `With every correct decision, you earn MEDICOINs that can be used for "Mental Health Support" such as therapy session, wellness program or stress management workshop.`,
    "game is not just about a single employee any medicoins you earn can be redeemed for broader medical benefits like arranging team wellness activity funding health insurance upgrades or securing wellness retreat for the entire team.",
    "Will you be able to strike the right balance between a supportive leader and managing company resources efficiently?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [username, setuserName] = useState("");

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setIsFading(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Update card
        setIsFading(false); // Reset fade-out
      }, 700); // Match the duration of the fade-out animation
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${username}! Let's go!`);
  };

  return (
    <div>
      {" "}
      <h1 class="flex items-center justify-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        Disclaimer
      </h1>
      <div className="mt-24 flex flex-col items-center justify-center">
        <div
          className={` flex w-1/2 flex-col  rounded-md bg-gray-400 p-6 text-center text-lg font-bold shadow-md transition-opacity duration-700 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {cards[currentIndex]}
          {currentIndex === cards.length - 1 && (
            <div class="">
              <form onSubmit={handleFormSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setuserName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center justify-center">
                  <Link to="/home">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-green-600 py-2 text-white transition duration-300 hover:bg-green-700 "
                    >
                      Let's Go
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Next Button */}
        {currentIndex < cards.length - 1 && (
          <button
            onClick={handleNext}
            className="mt-6 rounded-md bg-purple px-4 py-2 text-white transition duration-300 hover:bg-purple"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Disclaimer;
