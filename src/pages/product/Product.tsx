import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import ProductTable from "./components/table/ProductTable";
import DialogBox from "./components/dialog/DialogBox";
import { useDialog } from "./hooks/useDialog";

const Product = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addProduct");
  };
  const { openDialog, productData, handleClose, handleOpen } = useDialog();
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button onClick={handleClick}>Add product</Button>

      <Typography variant="h4" gutterBottom>
        Product Page
      </Typography>
      <ProductTable handleOpen={handleOpen} />
      <DialogBox
        openDialog={openDialog}
        productData={productData}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default Product;
