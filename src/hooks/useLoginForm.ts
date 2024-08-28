import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData } from "../types/loginFormTypes";
import { loginSchema } from "../schames/loginSchemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../services/authServices";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/Authprovider/AuthContext";
export const useLoginForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      login(data.accessToken);
      queryClient.invalidateQueries({ queryKey: ["userlogin"] });
      toast.success("User loggedin successfully!");
      navigate("/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    mutation,
  };
};
