import axios from "axios";
import { LoginFormData } from "../types/loginFormTypes";
const apiUrl = import.meta.env.VITE_REACT_API_URL;

export const userLogin = async (userData: LoginFormData) => {
  const response = await axios.post(`${apiUrl}/user/login`, userData);

  return response.data;
};
