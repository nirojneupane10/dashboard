import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Loader from "../../../../components/loader/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData } from "../../types/ProductTypes";
import { productSchema } from "../../schema/productSchema";

type ProductFormsProps = {
  defaultValues?: ProductFormData;
  onSubmit: (data: ProductFormData) => void;
  isUpdating?: boolean;
  isLoading?: boolean;
};

const ProductForms: React.FC<ProductFormsProps> = ({
  defaultValues,
  onSubmit,
  isUpdating = false,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h4" gutterBottom>
        {isUpdating ? "Update Product" : "Add Product"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={500}>
          <TextField
            label="Product Name"
            type="text"
            id="Product Name"
            autoComplete="Product Name"
            autoFocus
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Product Description"
            type="text"
            id="description"
            {...register("desc")}
            error={!!errors.desc}
            helperText={errors.desc?.message}
          />
          <TextField
            label="Price"
            type="number"
            id="price"
            {...register("price", {
              valueAsNumber: true,
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
          <TextField
            label="Quantity"
            type="number"
            id="quantity"
            {...register("quantity", {
              valueAsNumber: true,
            })}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
          <TextField
            label="Brand"
            type="text"
            id="brand"
            {...register("brand")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />
          <Button type="submit" variant="contained">
            {isLoading ? (
              <>
                <Loader />
                <Typography variant="body1" marginLeft={2}>
                  {isUpdating ? "Updating Product..." : "Adding Product..."}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">
                {isUpdating ? "Update Product" : "Add Product"}
              </Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductForms;
