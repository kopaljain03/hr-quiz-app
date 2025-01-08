import React from "react";
import { useQuestions } from "../context/QuestionsProvider";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";
import FinishScreen from "../components/FinishScreen";


const QuizApp = () => {
  const { status } = useQuestions();
  return (
    <div>
      
        <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
          {status === "pending" && <StartScreen />}

          {status === "active" && <Question />}

          {status === "finished" && <FinishScreen />}
        
      </div>
    </div>
  );
};

export default QuizApp;
