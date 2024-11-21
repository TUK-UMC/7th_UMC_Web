import Home from "./pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
