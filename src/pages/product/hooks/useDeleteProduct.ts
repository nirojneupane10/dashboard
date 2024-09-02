import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { deleteProduct } from "../../../api/productApi/productApi";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success(data.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || "Deleting product failed";
      toast.error(errorMessage);
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  return {
    handleDelete,
  };
};
