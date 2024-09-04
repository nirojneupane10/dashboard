import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required!!"),
  desc: z.string().min(1, "Product description is required!!"),
  price: z.number().min(1, "Product price is required!!"),
  quantity: z.number().min(1, "Quantity description is required!!"),
  brand: z.string().min(1, "Product description is required!!"),
});
