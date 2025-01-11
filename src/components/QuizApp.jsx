import React from "react";
import { useQuestions } from "../context/QuestionsProvider";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";
import FinishScreen from "../components/FinishScreen";
import Header from "./Header";

const QuizApp = () => {
  return (
    <div
      style={{
        backgroundImage: "url('backgrounds/bg_l1_new.jpeg')",
        backgroundSize: "cover", // Ensures the image covers the whole div
        backgroundPosition: "center", // Centers the background image
        height: "100vh", // Full height
        width: "100%", // Full width
      }}
    >
      <Header />
      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        <Question />
      </div>
    </div>
  );
};

export default QuizApp;
