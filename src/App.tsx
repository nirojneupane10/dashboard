import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./providers/ThemeProvider";
import Routes from "./router/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./providers/Authprovider/AuthProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
