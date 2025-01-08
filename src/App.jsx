import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizApp from "./components/QuizApp";
import HomeAvatars from "./components/HomeAvatars";
import Header from "./components/Header";
import StoryPage from "./components/StoryPage";


function App() {
  return (
    <div className="text-textColor">
        <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeAvatars />}>
          {" "}
        </Route>
        <Route path="/" element={<QuizApp />}></Route>
        <Route path="/story" element={<StoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
