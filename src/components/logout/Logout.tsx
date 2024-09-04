import { Box, Button } from "@mui/material";
import { useAuth } from "../../providers/Authprovider/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logout");
    navigate("/login");
  };

  return (
    <Box display="flex" justifyContent={"center"} marginTop={2}>
      <Button variant="contained" onClick={handleLogout} color="warning">
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
