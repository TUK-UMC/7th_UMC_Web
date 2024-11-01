import './App.css'
import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Search from './pages/SearchPage';
import CategoriPage from './pages/CategoriPage';
import MovieList from './components/MovieList';
import MovieIdPage from './pages/MovieIdPage';
import NowplayingPage from './pages/categori/NowplayingPage';
import PopularPage from './pages/categori/PopularPage';
import TopratedPage from './pages/categori/TopratedPage';
import UpcomingPage from './pages/categori/UpcomingPage';


const router  = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path:'movies',
        element: <p>영홥니다</p>
      },
      {
        path:'movies/:movieId',
        element: <MovieIdPage/>
      },
      {
        path:'movies/now-playing/movies/:movieId',
        element: <MovieIdPage/>
      },
      {
        path:'movies/popular/movies/:movieId',
        element: <MovieIdPage/>
      },
      {
        path:'movies/top-rated/movies/:movieId',
        element: <MovieIdPage/>
      },
      {
        path:'movies/up-coming/movies/:movieId',
        element: <MovieIdPage/>
      },
      {
        path:'login',
        element: <LoginPage/>
      },
      {
        path:'signup',
        element: <SignupPage/>
      },
      {
        path:'search',
        element: <Search/>
      },
      {
        path:'categori',
        element: <CategoriPage/>
      },
      {
        path:'movies/now-playing',
        element: <NowplayingPage/>
      },
      {
        path:'movies/popular',
        element: <PopularPage/>
      },
      {
        path:'movies/top-rated',
        element: <TopratedPage/>
      },
      {
        path:'movies/up-coming',
        element: <UpcomingPage/>
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
