import React from "react";
import { GiRibbonMedal } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";

const LevelEnded = ({ currentQuiz, points, handleNextLevel }) => {
  return (
    <div className="bg-opselect mt-12 flex flex-col items-center rounded-3xl p-3 font-openSans lg:p-10">
      <div className="flex flex-col items-center justify-center lg:pb-4">
        <div className=" flex items-center justify-center lg:text-5xl">
          <img
            src={currentQuiz.badgeicon}
            alt="Badge"
            className="h-[150px] w-[150px] rounded-full lg:h-[200px] lg:w-[200px]"
          />
        </div>

        <p className="text-white lg:text-xl">Badge Earned</p>
      </div>
      <h2 className="text-lg font-bold text-white lg:text-2xl">
        🎉Congratulations, Level Completed!🎉
      </h2>
      <p className="pb-4 text-center text-sm text-card lg:text-base">
        {currentQuiz.message}
      </p>
      <div className=" flex pr-8 text-2xl lg:text-5xl">
        <AiFillDollarCircle className=" text-3xl text-yellow-300 lg:text-5xl" />
        <div className="font-bold text-white">{points}</div>
      </div>

      <p className="text-white">Medicoins Earned</p>
      <button
        className="mt-4 rounded-lg  bg-[#f8996d] px-6 py-2 text-lg font-bold text-white hover:bg-para"
        type="button"
        onClick={handleNextLevel}
      >
        Next Level
      </button>
    </div>
  );
};

export default LevelEnded;
