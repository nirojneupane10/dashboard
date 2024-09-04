import { useState } from "react";
import { Product } from "../types/ProductTypes";

export const useDialog = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [productData, setProductData] = useState<Product | null>(null);

  const handleOpen = (product: Product) => {
    setOpenDialog(true);
    setProductData(product);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setProductData(null);
  };

  return {
    openDialog,
    handleOpen,
    productData,
    handleClose,
  };
};
