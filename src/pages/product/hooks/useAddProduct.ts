import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../api/productApi/productApi";
import { ProductFormData } from "../types/ProductTypes";
import { productSchema } from "../schema/productSchema";

export const useProductForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success(data.message);
      navigate("/product");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || "Adding product failed";
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
