import axios from "axios";
import { LoginFormData } from "../types/loginFormTypes";
import config from "../config/config";

export const userLogin = async (userData: LoginFormData) => {
  const response = await axios.post(`${config.apiUrl}/user/login`, userData);

  return response.data;
};
