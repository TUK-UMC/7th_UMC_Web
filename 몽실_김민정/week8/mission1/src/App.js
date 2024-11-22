import { Error } from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import { TodoDetail } from "./pages/TodoDetail/TodoDetail";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        { path: "todo/:id", element: <TodoDetail /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
