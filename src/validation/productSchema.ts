import { z } from "zod";
import dayjs, { Dayjs } from "dayjs";
export const productSchema = z.object({
  name: z.string().min(1, "Product name is required!!"),
  desc: z.string().min(1, "Product description is required!!"),
  price: z.number().min(1, "Product price must be a positive number!!"),
  quantity: z.number().min(1, "Quantity must be a positive number!!"),
  brand: z.string().min(1, "Brand is required!!"),
  category: z.string().min(1, "Category is required!!"),
  isAvailable: z.boolean().refine((val) => val !== undefined, {
    message: "Availability is required!!",
  }),
  expireDate: z.custom<Dayjs>((value) => dayjs.isDayjs(value), {
    message: "Invalid date, must be a Dayjs object",
  }),
});
