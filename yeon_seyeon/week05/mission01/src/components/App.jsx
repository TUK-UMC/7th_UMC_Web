import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import MovieCard from "./MovieCard";
import { MOVIES } from "../mocks/movies";
import SearchPage from "./SearchPage";
import MoviesPage from "./MoviesPage";
import NowPlayingPage from "./NowPlayingPage";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import UpComingPage from "./UpComingPage";
import MovieDetailPage from "./MovieDetailPage";
import LoginPage from "./LoginPage"; // 로그인 페이지 임포트
import SignupForm from "./SignupForm"; // 회원가입 폼 임포트

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
          {/* 영화 상세 페이지 */}
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          {/* 로그인 및 회원가입 페이지 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />{" "}
          {/* 회원가입 폼 컴포넌트 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
