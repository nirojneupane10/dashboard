import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductTable from "./components/table/ProductTable";
import { useDialog } from "./hooks/useDialog";
import { useCallback } from "react";
import AddIcon from "@mui/icons-material/Add";
import LazyLoad from "../../components/LazyLoad";

const DialogBox = React.lazy(() => import("./components/dialog/DialogBox"));

const Product = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/addProduct");
  }, [navigate]);

  const { openDialog, productData, handleClose, handleOpen } = useDialog();
  return (
    <Box>
      <Box display={"flex"} justifyContent={"end"}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          sx={{ marginBottom: 2 }}
          onClick={handleClick}
        >
          Add product
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ProductTable handleOpen={handleOpen} />

        {LazyLoad(() => (
          <DialogBox
            openDialog={openDialog}
            productData={productData}
            handleClose={handleClose}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Product;
