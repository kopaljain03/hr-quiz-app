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
    <header className="flex h-[70px] items-center justify-center ">
      <div className="container flex w-full items-center justify-center gap-[10px] ">
        <div className="flex w-full items-center justify-center">
          {currentQuiz.title && (
            <h3 className="text-2xl font-bold">
              {currentQuiz.level} : {currentQuiz.title}
            </h3>
          )}
        </div>
        <div className="ml-auto flex pr-4 lg:text-xl">
          <GiRibbonMedal className=" text-2xl text-yellow-300 lg:text-3xl" />
          <div className="pl-1">{badge}</div>
        </div>{" "}
        <div className="ml-auto flex pr-8 lg:text-xl">
          <AiFillDollarCircle className=" text-2xl text-yellow-300 lg:text-3xl" />
          <div className="pl-1">{points}</div>
        </div>{" "}
        {/* This will push the points to the rightmost corner */}
      </div>
    </header>
  );
}

export default Header;
