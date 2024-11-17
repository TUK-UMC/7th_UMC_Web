import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import UserProfile from './pages/UserProfile';
import MovieDetails from './pages/MovieDetails';
import MovieCredits from './pages/MovieCredits';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 검색바는 모든 페이지에서 사용될 수 있으므로 공통적으로 배치 */}
        <SearchBar />
        
        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/credits" element={<MovieCredits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
