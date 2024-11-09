import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Movies from './pages/movies/Movies';
import MovieListPage from './pages/movies/MovieListPage';
import MovieDetailPage from './pages/movies/MovieDetailPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

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

function Layout({ userEmail, onLogout }) {
  return (
    <>
      <NavbarWrapper>
        <Navbar userEmail={userEmail} onLogout={onLogout} />
      </NavbarWrapper>
      <MainWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainWrapper>
    </>
  );
}

function App() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // 로컬스토리지에서 토큰을 가져와서 로그인 상태를 확인하고 유저 정보를 불러오기
    const token = localStorage.getItem('accessToken');
    if (token) {
      fetchUserEmail(token);
    }
  }, []);

  const fetchUserEmail = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserEmail(response.data.email.split('@')[0]);
    } catch (error) {
      console.error('유저 정보를 불러오는 데 실패했습니다:', error);
    }
  };

  const handleLogin = (token, email) => {
    localStorage.setItem('accessToken', token);
    setUserEmail(email.split('@')[0]);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUserEmail('');
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout userEmail={userEmail} onLogout={handleLogout} />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/now-playing" element={<MovieListPage apiEndpoint={`${process.env.REACT_APP_MOVIE_API_URL}/movie/now_playing?language=ko-KR&page=1`} />} />
          <Route path="movies/popular" element={<MovieListPage apiEndpoint={`${process.env.REACT_APP_MOVIE_API_URL}/movie/popular?language=ko-KR&page=1`} />} />
          <Route path="movies/top-rated" element={<MovieListPage apiEndpoint={`${process.env.REACT_APP_MOVIE_API_URL}/movie/top_rated?language=ko-KR&page=1`} />} />
          <Route path="movies/upcoming" element={<MovieListPage apiEndpoint={`${process.env.REACT_APP_MOVIE_API_URL}/movie/upcoming?language=ko-KR&page=1`} />} />
          <Route path="movies/:movieId" element={<MovieDetailPage />} />
          <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
