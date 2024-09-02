import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Loader from "../../../../components/loader/Loader";
import { Product, ProductFormData } from "../../types/ProductTypes";
import { useUpdateProduct } from "../../hooks/useProductUpdate";

type UpdateProductFormsProps = {
  product: Product | null;
};

const UpdateProductForms: React.FC<UpdateProductFormsProps> = ({ product }) => {
  const defaultValues: ProductFormData = {
    name: product?.name || "",
    desc: product?.desc || "",
    price: product?.price || 0,
    quantity: product?.quantity || 0,
    brand: product?.brand || "",
  };

  const { register, handleSubmit, errors, onSubmit, mutation } =
    useUpdateProduct(defaultValues, product?._id || "");

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h4" gutterBottom>
        Update Product
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
            {mutation.isPending ? (
              <>
                <Loader />
                <Typography variant="body1" marginLeft={2}>
                  Updating Product...
                </Typography>
              </>
            ) : (
              <Typography variant="body1">Update Product</Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UpdateProductForms;
