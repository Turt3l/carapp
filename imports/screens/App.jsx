import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style.css";
import MakeScreen from "../screens/MakeScreen.jsx";
import React from "react";
import EvaluateScreen from "../screens/EvaluateScreen.jsx";

const tele = window.Telegram.WebApp;

useEffect(() => {
  tele.ready();
});

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MakeScreen />} />
        <Route exact path="/eval" element={<EvaluateScreen tele={tele} />} />
      </Routes>
    </BrowserRouter>
  );
};
