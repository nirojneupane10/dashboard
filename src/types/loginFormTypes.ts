import { z } from "zod";
import { loginSchema } from "../validation/loginSchemas";

export type LoginFormData = z.infer<typeof loginSchema>;
