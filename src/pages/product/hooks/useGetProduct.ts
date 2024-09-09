import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../api/productApi/productApi";
import { Product } from "../../../types/productTypes";
import { queryKeys } from "../../../keys/keys";

export const useProduct = () => {
  return useQuery<Product[]>({
    queryKey: [queryKeys.PRODUCT_QUERY_KEY],
    queryFn: getProduct,
  });
};
