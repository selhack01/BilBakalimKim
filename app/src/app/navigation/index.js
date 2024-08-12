import { Route, Routes } from "react-router-dom";
import LoginPage from "../page/loginpage";
import NotFoundPage from "../page/404page";
import MainPage from "../page/mainpage";
import QuestionPage from "../page/question";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/question" element={<QuestionPage />}></Route>
    </Routes>
  );
};

export default Navigation;
