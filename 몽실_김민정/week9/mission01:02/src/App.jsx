import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import theme from "./styles/theme";
import { Navbar } from "./components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
