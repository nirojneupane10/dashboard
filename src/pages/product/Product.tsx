import React, { Suspense } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductTable from "./components/table/ProductTable";
import { useDialog } from "./hooks/useDialog";
import { useCallback } from "react";
import Loader from "../../components/loader/Loader";
import AddIcon from "@mui/icons-material/Add";

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
        <Typography variant="h4" gutterBottom>
          Product Page
        </Typography>
        <ProductTable handleOpen={handleOpen} />

        <Suspense fallback={<Loader />}>
          <DialogBox
            openDialog={openDialog}
            productData={productData}
            handleClose={handleClose}
          />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Product;
