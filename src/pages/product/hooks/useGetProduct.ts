import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../api/productApi/productApi";
import { Product } from "../types/ProductTypes";

const PRODUCT_QUERY_KEY = "product";

export const useProduct = () => {
  return useQuery<Product[]>({
    queryKey: [PRODUCT_QUERY_KEY],
    queryFn: getProduct,
  });
};
