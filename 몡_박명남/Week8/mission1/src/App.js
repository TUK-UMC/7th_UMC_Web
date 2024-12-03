import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 상세 페이지를 추가하려면 여기에 Route 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
