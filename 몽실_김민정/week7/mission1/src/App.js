import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RootLayout } from "./layout/root-layout";
import Home from "./pages//Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Search } from "./pages/Search";
import { NowPlaying } from "./pages/categories/NowPlaying";
import { Popular } from "./pages/categories/Popular";
import { TopRated } from "./pages/categories/TopRated";
import { UpComing } from "./pages/categories/UpComing";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { MovieDetail } from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "Category",
        element: <Category />,
      },
      {
        path: "/movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/movies/popular",
        element: <Popular />,
      },
      {
        path: "/movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movies/up-coming",
        element: <UpComing />,
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
  {},
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
