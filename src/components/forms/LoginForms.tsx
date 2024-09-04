import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useLoginForm } from "../../hooks/useLoginForm";

import Loader from "../loader/Loader";

const LoginForms = () => {
  const { register, handleSubmit, errors, onSubmit, mutation } = useLoginForm();

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h4" gutterBottom>
        Login Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={500}>
          <TextField
            label="Username"
            type="text"
            id="username"
            autoComplete="username"
            autoFocus
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            {mutation.isPending ? (
              <>
                <Loader />
                <Typography variant="body1" marginLeft={2}>
                  Logging...
                </Typography>
              </>
            ) : (
              <Typography variant="body1">Login</Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginForms;
