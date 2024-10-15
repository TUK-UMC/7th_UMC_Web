import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout"; // RootLayout 임포트
import Navbar from "./Navbar"; // Navbar 컴포넌트 임포트
import MovieCard from "./MovieCard"; // MovieCard 컴포넌트 임포트
import { MOVIES } from "../mocks/movies";
import SearchPage from "./SearchPage"; // 검색 페이지 컴포넌트 임포트
import MoviesPage from "./MoviesPage"; // 영화 페이지 컴포넌트 임포트

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 모든 경로는 RootLayout 안에서 관리 */}
        <Route path="/" element={<RootLayout />}>
          {/* 메인 페이지 (영화 리스트) */}
          <Route
            index
            element={
              <div>
                <Navbar />
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
              </div>
            }
          />
          {/* 추가 경로들 */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/login" element={<h1>로그인 페이지</h1>} />
          <Route path="/signup" element={<h1>회원가입 페이지</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
