import React from "react";
import { useQuestions } from "../context/QuestionsProvider";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";
import FinishScreen from "../components/FinishScreen";
import Header from "./Header";

const QuizApp = () => {
  return (
    <div>
      <Header />
      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        <Question />
      </div>
    </div>
  );
};

export default QuizApp;
