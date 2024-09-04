import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { updateProduct } from "../../../api/productApi/productApi";
import { ProductFormData } from "../types/ProductTypes";
import { productSchema } from "../schema/productSchema";
import { queryKeys } from "../../../keys/keys";

export const useUpdateProduct = (
  defaultValues: ProductFormData,
  id: string
) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: (data: ProductFormData) => updateProduct(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRODUCT_QUERY_KEY],
      });
      toast.success(data.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || "Updating product failed";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: ProductFormData) => {
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    mutation,
  };
};
