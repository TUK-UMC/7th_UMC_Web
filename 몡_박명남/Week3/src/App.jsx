import './App.css'
import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Search from './pages/SearchPage';
import CategoriPage from './pages/CategoriPage';
import MovieList from './components/MovieList';


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
        element: <p>영홥니다</p>
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
        element: <MovieList 
        movieUrl={'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'}
        movieAutho={'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFiZTViNWY2NzZkYzNkOGE5YmZjMDBlMmQ4NTI2MCIsIm5iZiI6MTcyODYzMDUxNC4yNzIwOTUsInN1YiI6IjY3MDRiMjczMjIyZWFkMWVkYWMwMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbCoJWmt1BaVBzODhxtytebxZW5mkoP4oDplBwtYegc'}
        />
      },
      {
        path:'movies/popular',
        element: <MovieList 
        movieUrl={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'}
        movieAutho={'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFiZTViNWY2NzZkYzNkOGE5YmZjMDBlMmQ4NTI2MCIsIm5iZiI6MTcyODYzMDUxNC4yNzIwOTUsInN1YiI6IjY3MDRiMjczMjIyZWFkMWVkYWMwMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbCoJWmt1BaVBzODhxtytebxZW5mkoP4oDplBwtYegc'}
        />
      },
      {
        path:'movies/top-rated',
        element: <MovieList 
        movieUrl={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'}
        movieAutho={'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFiZTViNWY2NzZkYzNkOGE5YmZjMDBlMmQ4NTI2MCIsIm5iZiI6MTcyODYzMDUxNC4yNzIwOTUsInN1YiI6IjY3MDRiMjczMjIyZWFkMWVkYWMwMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbCoJWmt1BaVBzODhxtytebxZW5mkoP4oDplBwtYegc'}
        />
      },
      {
        path:'movies/up-coming',
        element: <MovieList 
        movieUrl={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'}
        movieAutho={'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFiZTViNWY2NzZkYzNkOGE5YmZjMDBlMmQ4NTI2MCIsIm5iZiI6MTcyODYzMDUxNC4yNzIwOTUsInN1YiI6IjY3MDRiMjczMjIyZWFkMWVkYWMwMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbCoJWmt1BaVBzODhxtytebxZW5mkoP4oDplBwtYegc'}
        />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
