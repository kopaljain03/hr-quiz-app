import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import icons
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

const Category2 = ({
  question,
  options,
  points,
  correctAnswers,
  handleOptionClick,
  handleNextQuestion,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setSelectedOptions([]); // Reset selected option
    setSubmitted(false); // Reset submission state
  }, [question]); // Trigger reset when question changes

  // Toggle selection for an option
  const handleOptionSelect = (index) => {
    if (!submitted) {
      setSelectedOptions(
        (prevSelected) =>
          prevSelected.includes(index)
            ? prevSelected.filter((i) => i !== index) // Deselect if already selected
            : [...prevSelected, index], // Select if not already selected
      );
    }
  };

  // Handle Submit
  const handleSubmit = () => {
    if (!submitted) {
      if (selectedOptions.length === 0) {
        // Alert if no options are selected
        toast.error("No options selected. Please choose at least one option.", {
          position: "top-center",
          autoClose: 3000, // 3 seconds
        });
        return;
      }
      const totalPoints = selectedOptions.reduce(
        (sum, idx) => sum + points[idx],
        0,
      );
      handleOptionClick(totalPoints); // Update global points
      setSubmitted(true); // Mark as submitted
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container mx-auto px-[10px] md:w-[80%]">
        <div className="flex min-h-[45vh] w-full flex-col items-center justify-around gap-[20px] p-[20px] md:flex-row md:justify-between">
          {/* Question and Points Display */}
          <div className="flex h-[40vh] w-full flex-col items-start justify-center gap-[20px] md:w-[50%] md:justify-between">
            <p className="text-left text-xl sm:text-2xl">{question}</p>
          </div>

          {/* Options */}
          <div className="flex w-full flex-col items-center gap-[10px] text-sm sm:gap-[20px] sm:text-base md:w-[50%]">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex w-full items-center justify-between gap-4 rounded-lg border px-4 py-2 ${
                  selectedOptions.includes(index) ? "bg-gray-700" : "" // Highlight selected option
                }`}
              >
                <button
                  className="flex-1 text-left"
                  onClick={() => handleOptionSelect(index)}
                  disabled={submitted} // Disable after submission
                >
                  {option}
                </button>
                {submitted &&
                  (correctAnswers.includes(index) ? (
                    <FaCheckCircle className="text-xl text-green-500" />
                  ) : selectedOptions.includes(index) ? (
                    <FaTimesCircle className="text-xl text-red-500" />
                  ) : null)}
              </div>
            ))}

            {/* Submit Button */}
            {!submitted && (
              <button
                className="hover:bg-purple-700 mt-4 rounded-lg bg-purple px-6 py-2 text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}

            {/* Next Question Button */}
            {submitted && (
              <button
                className="mt-4 rounded-lg bg-green-500 px-6 py-2 text-white hover:bg-green-700"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
