import React from 'react';
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
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

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

const queryClient = new QueryClient();

function Layout() {
  return (
    <>
      <NavbarWrapper>
        <Navbar />
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

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/now-playing" element={<MovieListPage apiEndpoint="now_playing" />} />
            <Route path="movies/popular" element={<MovieListPage apiEndpoint="popular" />} />
            <Route path="movies/top-rated" element={<MovieListPage apiEndpoint="top_rated" />} />
            <Route path="movies/upcoming" element={<MovieListPage apiEndpoint="upcoming" />} />
            <Route path="movies/:movieId" element={<MovieDetailPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
