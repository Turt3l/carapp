import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style.css";
import MakeScreen from "../screens/MakeScreen.jsx";
import React from "react";
import EvaluateScreen from "../screens/EvaluateScreen.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MakeScreen />} />
        <Route exact path="/eval" element={<EvaluateScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
