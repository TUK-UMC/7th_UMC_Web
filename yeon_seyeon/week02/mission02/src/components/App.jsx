// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Navbar 컴포넌트 임포트
import MovieCard from "./MovieCard"; // MovieCard 컴포넌트 임포트
import { MOVIES } from "../mocks/movies";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                {MOVIES.results.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            }
          />
          <Route path="/login" element={<h1>로그인 페이지</h1>} />
          <Route path="/signup" element={<h1>회원가입 페이지</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
