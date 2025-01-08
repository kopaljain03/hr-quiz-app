import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";


const FlipCard = () => {
  console.log(motion);
  const [flip, setFlip] = useState(true);
  

  
  return (
    <div className="App">
      <motion.div
        style={{ width: "30rem", height: "20rem" }}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="Card"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="front"
          >
            Front Side
            <button
              onClick={() => setFlip((prevState) => !prevState)}
              type="button"
              class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Select Avatar
            </button>
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            // style={{ display: flip ? "none" : "block" }}
            transition={{ duration: 0.7 }}
            className="back"
          >
            Back Side
            <div class="w-full max-w-xs">
              <form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div class="mb-4">
                  <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </form>
            </div>
            <Link
              to="/story"
              type="button"
              class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                     
              Start Playing
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
