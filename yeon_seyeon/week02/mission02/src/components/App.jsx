import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout"; // RootLayout 임포트
import MovieCard from "./MovieCard"; // MovieCard 컴포넌트 임포트
import { MOVIES } from "../mocks/movies";
import SearchPage from "./SearchPage"; // 검색 페이지 컴포넌트 임포트
import MoviesPage from "./MoviesPage"; // 영화 카테고리 선택 페이지 컴포넌트 임포트
import NowPlayingPage from "./NowPlayingPage"; // 현재 상영중인 영화 데이터 페이지
import PopularPage from "./PopularPage"; // 인기있는 영화 데이터 페이지
import TopRatedPage from "./TopRatedPage"; // 높은 평가를 받은 영화 데이터 페이지
import UpComingPage from "./UpComingPage"; // 개봉 예정중인 영화 데이터 페이지

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* 메인 페이지 (영화 리스트) */}
          <Route
            index
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
          {/* 검색 페이지 */}
          <Route path="/search" element={<SearchPage />} />
          {/* 영화 카테고리 선택 페이지 */}
          <Route path="/movies" element={<MoviesPage />} />
          {/* 각 카테고리별 영화 페이지 */}
          <Route path="/movies/now-playing" element={<NowPlayingPage />} />
          <Route path="/movies/popular" element={<PopularPage />} />
          <Route path="/movies/top-rated" element={<TopRatedPage />} />
          <Route path="/movies/up-coming" element={<UpComingPage />} />
          {/* 로그인 및 회원가입 페이지 */}
          <Route path="/login" element={<h1>로그인 페이지</h1>} />
          <Route path="/signup" element={<h1>회원가입 페이지</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
