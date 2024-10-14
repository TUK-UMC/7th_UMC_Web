import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Movies from './pages/movies/Movies';
import MovieListPage from './pages/movies/MovieListPage';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #1c1c1c;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 1;
  height: calc(100vh - 60px);
`;

const NavbarWrapper = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: #1f1f1f;
`;

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 60px;
`;

const ContentArea = styled.div`
  margin-left: 200px;
  padding: 20px;
  background-color: #000;
  color: white;
  width: calc(100% - 200px);
  overflow-y: hidden;
  min-height: calc(100vh - 60px);
  z-index: 1;
`;

function App() {
  return (
    <Router>
      <AppLayout>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <MainWrapper>
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
          <ContentArea>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/now-playing" element={<MovieListPage apiEndpoint="https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1" />} />
              <Route path="/movies/popular" element={<MovieListPage apiEndpoint="https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1" />} />
              <Route path="/movies/top-rated" element={<MovieListPage apiEndpoint="https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1" />} />
              <Route path="/movies/upcoming" element={<MovieListPage apiEndpoint="https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1" />} />
            </Routes>
          </ContentArea>
        </MainWrapper>
      </AppLayout>
    </Router>
  );
}

export default App;
