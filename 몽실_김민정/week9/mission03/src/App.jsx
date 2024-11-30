import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./styles/theme";
import { Navbar } from "./components/Navbar";
import useCartStore from "./store/cartStore";
import "./App.css";

function App() {
  const { cartItems, calculateTotals } = useCartStore();

  useEffect(() => {
    calculateTotals();
  }, [cartItems, calculateTotals]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
