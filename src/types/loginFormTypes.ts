import { z } from "zod";
import { loginSchema } from "../schames/loginSchemas";

export type LoginFormData = z.infer<typeof loginSchema>;
