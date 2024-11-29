import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
