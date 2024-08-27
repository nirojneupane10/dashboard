import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
