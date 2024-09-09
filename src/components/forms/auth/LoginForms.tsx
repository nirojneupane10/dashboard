import { Box, Button, Stack, Typography } from "@mui/material";
import { useLoginForm } from "../../../hooks/useLoginForm";

import Loader from "../../loader/Loader";
import InputTextField from "../FormField/InputTextField";
import InputPasswordField from "../FormField/InputPasswordField";

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
          <InputTextField
            label="Username"
            fieldName="username"
            register={register}
            errors={errors}
          />
          <InputPasswordField
            label="password"
            fieldName="password"
            register={register}
            errors={errors}
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
