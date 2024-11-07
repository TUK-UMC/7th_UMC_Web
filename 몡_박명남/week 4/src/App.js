import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NowPlayingMovies from './pages/NowPlayingMovies';
import PopularMovies from './pages/PopularMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Router>
      <RootLayout>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/movies/now-playing" element={<NowPlayingMovies />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/movies/top-rated" element={<TopRatedMovies />} />
          <Route path="/movies/up-coming" element={<UpcomingMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
