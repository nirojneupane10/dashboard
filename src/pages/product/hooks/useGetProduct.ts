import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../api/productApi/productApi";
import { Product } from "../types/ProductTypes";

export const useProduct = () => {
  return useQuery<Product[]>({
    queryKey: ["product"],
    queryFn: getProduct,
  });
};
