import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./providers/ThemeProvider";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
