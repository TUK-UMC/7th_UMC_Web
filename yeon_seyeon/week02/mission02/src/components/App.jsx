// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout"; // RootLayout 가져오기
import SearchPage from "./SearchPage"; // 검색 페이지
import MoviesPage from "./MoviesPage"; // 영화 페이지
import Navbar from "./Navbar"; // Navbar 컴포넌트 임포트
import MovieCard from "./MovieCard"; // MovieCard 컴포넌트 임포트
import { MOVIES } from "../mocks/movies"; // 영화 데이터

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar는 페이지 전체에 적용되므로 상단에 위치 */}
      <Routes>
        {/* RootLayout을 메인 레이아웃으로 사용 */}
        <Route path="/" element={<RootLayout />}>
          {/* Search 페이지 라우트 */}
          <Route path="search" element={<SearchPage />} />
          {/* Movies 페이지 라우트 */}
          <Route path="movies" element={<MoviesPage />} />
        </Route>
        {/* 홈 화면에서 영화 리스트를 보여주는 라우트 */}
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
        {/* 로그인 및 회원가입 페이지 라우트 */}
        <Route path="/login" element={<h1>로그인 페이지</h1>} />
        <Route path="/signup" element={<h1>회원가입 페이지</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
