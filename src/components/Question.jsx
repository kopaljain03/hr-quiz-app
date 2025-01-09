import React, { useEffect, useState } from "react";
import Button from "./Button";
import Option from "./Option";
import Progress from "./Progress";
import data from "../data"; // Assuming this is the file where quizzes are stored

function Question() {
  const [level, setLevel] = useState(
    () => JSON.parse(localStorage.getItem("level")) || 0,
  );
  const [questionIndex, setQuestionIndex] = useState(
    () => JSON.parse(localStorage.getItem("questionIndex")) || 0,
  );
  const [points, setPoints] = useState(
    () => JSON.parse(localStorage.getItem("points")) || 100,
  );
  const [answer, setAnswer] = useState(null);

  const currentLevel = data.quizzes[level];
  const currentQuestion = currentLevel.questions[questionIndex];
  const questionsNum = currentLevel.questions.length;

  // Update localStorage whenever points, questionIndex, or level changes
  useEffect(() => {
    localStorage.setItem("level", JSON.stringify(level));
    localStorage.setItem("questionIndex", JSON.stringify(questionIndex));
    localStorage.setItem("points", JSON.stringify(points));
  }, [level, questionIndex, points]);

  const handleOptionSelect = (optionPoints) => {
    setPoints((prev) => prev + optionPoints);
    setAnswer(optionPoints);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questionsNum - 1) {
      setQuestionIndex((prev) => prev + 1);
      setAnswer(null);
    } else if (level < data.quizzes.length - 1) {
      setLevel((prev) => prev + 1);
      setQuestionIndex(0);
      setAnswer(null);
    } else {
      alert("Quiz Finished!");
      localStorage.clear(); // Reset localStorage for a new attempt
    }
  };

  return (
    <div className="container mx-auto px-[10px] md:w-[80%]">
      <div className="flex min-h-[45vh] w-full flex-col items-center justify-around gap-[20px] p-[20px] md:flex-row md:justify-between">
        <div className="flex h-[40vh] w-full flex-col items-start justify-center gap-[20px] md:w-[50%] md:justify-between">
          <p className="text-left text-xl sm:text-2xl">
            {currentQuestion.question}
          </p>
          <div className="flex w-full flex-wrap items-center justify-between gap-[10px]">
            <Progress
              index={questionIndex}
              questionsNum={questionsNum}
              answer={answer}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[10px] text-sm sm:gap-[20px] sm:text-base md:w-[50%]">
          {currentQuestion?.options?.map((option, i) => (
            <Option
              key={i}
              option={option}
              onClick={() => handleOptionSelect(currentQuestion.points[i])}
              isSelected={answer === currentQuestion.points[i]}
            />
          ))}

          {answer && (
            <Button onClick={handleNextQuestion}>
              {questionIndex < questionsNum - 1
                ? "Next Question"
                : level < data.quizzes.length - 1
                  ? "Next Level"
                  : "Finish"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
