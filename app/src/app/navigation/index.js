import { Route, Routes } from "react-router-dom";
import QuestionPage from "../page/question";
import NotFoundPage from "../page/404page";
import LoginPage from "../page/loginpage";
import MainPage from "../page/mainpage";
import {PrivateRoute} from "./private"

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route
        path="/question"
        element={
          <PrivateRoute>
            <QuestionPage />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Navigation;
