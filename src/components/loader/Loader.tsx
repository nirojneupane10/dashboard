import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box>
      <CircularProgress size={20} color="inherit" />
    </Box>
  );
};

export default Loader;
