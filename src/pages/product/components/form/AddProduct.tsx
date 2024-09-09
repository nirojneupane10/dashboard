import { Box, Button, Typography } from "@mui/material";
import { useProductForm } from "../../hooks/useAddProduct";
import ProductForms from "./ProductForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const AddProduct: React.FC = () => {
  const { onSubmit, mutation } = useProductForm();
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ width: 100 }}
      >
        Back
      </Button>
      <Typography variant="h4" gutterBottom textAlign={"center"}>
        Add Product
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <ProductForms onSubmit={onSubmit} isLoading={mutation.isPending} />
      </Box>
    </Box>
  );
};

export default AddProduct;
