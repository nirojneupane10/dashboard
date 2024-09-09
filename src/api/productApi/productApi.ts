import axios from "axios";
import config from "../../config/config";
import { ProductFormData } from "../../pages/product/types/ProductTypes";

//Route 1: Get all the product
export const getProduct = async () => {
  const response = await axios.get(`${config.productURL}/product`);

  return response.data;
};

//Route 2: Display single product
export const getSingleProduct = async (id: number) => {
  const response = await axios.get(`${config.productURL}/product/${id}`);

  return response.data;
};

//Route 3: Add product
export const addProduct = async (productData: ProductFormData) => {
  const response = await axios.post(
    `${config.productURL}/product`,
    productData
  );

  return response.data;
};

//Route 4: Delete product
export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${config.productURL}/product/${id}`);
  return response.data;
};

//Route 5: Update product
export const updateProduct = async (id: string, data: ProductFormData) => {
  const response = await axios.patch(
    `${config.productURL}/product/${id}`,
    data
  );
  return response.data;
};
