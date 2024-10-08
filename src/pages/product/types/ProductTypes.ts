import { z } from "zod";
import { productSchema } from "../schema/productSchema";

export type Product = {
  _id: string;
  name: string;
  desc: string;
  price: number;
  quantity: number;
  brand: string;
  __v: number;
};

export type ProductFormData = z.infer<typeof productSchema>;
