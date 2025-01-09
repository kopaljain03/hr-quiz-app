import { useQuestions } from "../context/QuestionsProvider";
import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import Option from "./Option";
import Progress from "./Progress";
import { quizData } from "../data";
import Category1 from "./uiCategories/Category1";
import Category2 from "./uiCategories/Category2";
import Category3 from "./uiCategories/Category3";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";
import { useEffect } from "react";
import * as XLSX from "xlsx";

function Question() {
  // const { dispatch, answer, index, questionsNum, secondRemaining } =
  //   useQuestions();
  const {
    points,
    setPoints,
    questionIndex,
    setQuestionIndex,
    currentLevel,
    setCurrentLevel,
    levelEnded,
    setLevelEnded,
    badge,
    setBadge,
    username,
  } = useQuiz();
  const currentQuiz = quizData.quizzes[currentLevel]; // Current level data
  const currentQuestion = currentQuiz.questions[questionIndex]; // Current question data
  const handleOptionClick = (optionPoints) => {
    setPoints(points + optionPoints); // Update points
  };
  const handleNextQuestion = () => {
    if (questionIndex < quizData.quizzes[currentLevel].questions.length - 1) {
      setQuestionIndex(questionIndex + 1); // Move to the next question
    } else {
      setLevelEnded(true); // End the level
    }
  };
  const handleNextLevel = () => {
    if (currentLevel < quizData.quizzes.length - 1) {
      setCurrentLevel(currentLevel + 1); // Move to the next level
      setQuestionIndex(0); // Reset question index
      setLevelEnded(false); // Reset levelEnded
    } else {
      const data = [{ Name: username, Badge: badge, Points: points }];
      const worksheet = XLSX.utils.json_to_sheet(data);

      // Create a workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Export the workbook to an Excel file
      XLSX.writeFile(workbook, "DataExport.xlsx");
      alert("Quiz Completed! Final Points: " + points);
    }
  };

  useEffect(() => {
    if (levelEnded) {
      setBadge((prevBadge) => prevBadge + 1);
    }
  }, [levelEnded]);
  const renderCategoryComponent = () => {
    switch (currentQuestion.Category) {
      case 1:
        return (
          <Category1
            question={currentQuestion.question}
            options={currentQuestion.options}
            points={currentQuestion.points}
            handleOptionClick={handleOptionClick}
            handleNextQuestion={handleNextQuestion}
          />
        );

      case 2:
        return (
          <Category2
            question={currentQuestion.question}
            options={currentQuestion.options}
            points={currentQuestion.points}
            correctAnswers={currentQuestion.correctanswers} // Index of correct options
            handleOptionClick={handleOptionClick}
            handleNextQuestion={handleNextQuestion}
          />
        );

      case 3:
        return (
          <Category3
            question={currentQuestion.question}
            options={currentQuestion.options}
            points={currentQuestion.points}
            correctAnswers={currentQuestion.correctanswers} // Index of correct options
            handleOptionClick={handleOptionClick}
            handleNextQuestion={handleNextQuestion}
          />
        );
      default:
        return <p>Category not defined.</p>;
    }
  };
  if (levelEnded) {
    return (
      <div className="flex h-[500px] flex-col items-center ">
        <div className="flex flex-col items-center justify-center pb-8">
          <div className=" flex items-center justify-center lg:text-5xl">
            <GiRibbonMedal className=" text-2xl text-yellow-300 lg:text-[200px]" />
          </div>

          <p>Badge Earned</p>
        </div>
        <h2 className="text-3xl">Congratulations, Level Completed!</h2>
        <p className="pb-4 text-lg">{currentQuiz.message}</p>
        <div className=" flex pr-8 lg:text-5xl">
          <AiFillDollarCircle className=" text-2xl text-yellow-300 lg:text-5xl" />
          <div className="">{points}</div>
        </div>

        <p>Medicoins Earned</p>
        <button
          class="mt-8 rounded-md border border-slate-300 px-4 py-2 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleNextLevel}
        >
          Next Level
        </button>
      </div>
    );
  }

  return (
    <div>
      {renderCategoryComponent()}
      {/* <div>{points}</div>
      <button onClick={handleNextQuestion}>Next Question</button> */}
      {/* {username} */}
    </div>
  );
}

export default Question;

// return (
// <div className="container mx-auto px-[10px] md:w-[80%]">
//   <div className="flex min-h-[45vh] w-full flex-col items-center justify-around gap-[20px] p-[20px] md:flex-row md:justify-between">
//     <div className="flex h-[40vh] w-full flex-col items-start justify-center gap-[20px] md:w-[50%] md:justify-between">
//       <p className="text-left text-xl sm:text-2xl">
//         <h2>Points: {points}</h2>
//         {currentQuestion.question}
//       </p>
//       <div className="flex w-full flex-wrap items-center justify-between gap-[10px]">
//         <Progress
//           index={index}
//           questionsNum={questionsNum}
//           answer={answer}
//         />
//         <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
//       </div>
//     </div>

//     <div className="flex w-full flex-col  items-center gap-[10px] text-sm sm:gap-[20px] sm:text-base md:w-[50%]">
//       {currentQuestion.options.map((option, index) => (
//         <button
//           className="option flex items-center justify-between gap-[5px]"
//           onClick={() => handleOptionClick(currentQuestion.points[index])}
//           // disabled={hasAnswered}
//         >
//           <h3>{option}</h3>

//           {/* {answer && (
//             <img
//               src={
//                 question.answer === option ? correctImage : incorrectImage
//               }
//               alt=""
//               className="w-[20px]"
//             />
//           )} */}
//         </button>
//       ))}
//       {/* {currentQuestion?.options?.map((q, i) => {
//         return (
//           <Option
//             key={i}
//             option={currentQuestion?.options[i]}
//             dispatch={dispatch}
//             answer={answer}
//             question={currentQuestion}
//           />
//         );
//       })} */}

//       {/* {answer && index < questionsNum - 1 ? (
//         <Button onClick={() => dispatch({ type: "nextQuestion" })}>
//           Next Question
//         </Button>
//       ) : null}

//       {answer && index === questionsNum - 1 ? (
//         <Button onClick={() => dispatch({ type: "finish" })}>Finish</Button>
//       ) : null} */}
//       <button onClick={handleNextQuestion}>Next Question</button>
//     </div>
//   </div>
// </div>
// );
