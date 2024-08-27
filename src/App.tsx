import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./providers/ThemeProvider";
import Routes from "./router/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
