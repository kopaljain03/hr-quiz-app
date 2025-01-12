import { useQuestions } from "../context/QuestionsProvider";
import ToggleDarkModeBtn from "./ToggleDarkModeBtn";
import { quizData } from "../data";
import { useQuiz } from "../context/QuizContext";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";

function Header() {
  const { points, currentLevel, levelEnded, setLevelEnded, badge } = useQuiz();
  const currentQuiz = quizData.quizzes[currentLevel]; // Current level data

  return (
    <header className="flex h-[70px] items-center justify-center">
      <div className="container relative  flex w-full items-center justify-center gap-[10px] lg:mt-36">
        <div className="  flex w-full items-center justify-center font-bebas text-head">
          {currentQuiz.title && (
            <h3 className=" text-2xl font-bold lg:text-[40px]">
              {currentQuiz.level} : {currentQuiz.title}
            </h3>
          )}
        </div>
        <div className="fixed  right-0 mr-4 rounded-xl bg-black bg-opacity-60 p-1 lg:top-3 lg:rounded-3xl lg:p-4 ">
          <div className="flex lg:text-xl">
            <GiRibbonMedal className=" text-xl text-yellow-300 lg:text-3xl" />
            <div className="pl-1 text-white">{badge}</div>
          </div>{" "}
          <div className=" flex pr-2 lg:mt-4 lg:pr-8 lg:text-xl">
            <AiFillDollarCircle className=" text-xl text-yellow-300 lg:text-3xl" />
            <div className="pl-1 text-white">{points}</div>
          </div>{" "}
        </div>
        {/* This will push the points to the rightmost corner */}
      </div>
    </header>
  );
}

export default Header;
