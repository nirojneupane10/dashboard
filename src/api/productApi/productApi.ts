import { ProductFormData } from "../../pages/product/types/ProductTypes";
import axiosIntance from "../axiosInstance";

//Route 1: Get all the products
export const getProduct = async () => {
  const response = await axiosIntance.get("/product");

  return response.data;
};

//Route 2: Display single product
export const getSingleProduct = async (id: number) => {
  const response = await axiosIntance.get(`/product/${id}`);

  return response.data;
};

//Route 3: Add product
export const addProduct = async (productData: ProductFormData) => {
  const response = await axiosIntance.post(`/product`, productData);

  return response.data;
};

//Route 4: Delete product
export const deleteProduct = async (id: string) => {
  const response = await axiosIntance.delete(`product/${id}`);
  return response.data;
};

//Route 5: Update product
export const updateProduct = async (id: string, data: ProductFormData) => {
  const response = await axiosIntance.patch(`/product/${id}`, data);
  return response.data;
};
