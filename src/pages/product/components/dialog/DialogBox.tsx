import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../../types/ProductTypes";

import React from "react";
import UpdateProductForms from "../form/UpdateProduct";

type DialogBoxProps = {
  openDialog: boolean;
  productData: Product | null;
  handleClose: () => void;
};
const DialogBox: React.FC<DialogBoxProps> = React.memo(
  ({ openDialog, productData, handleClose }) => {
    return (
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {productData && <UpdateProductForms product={productData} />}
      </Dialog>
    );
  }
);

export default DialogBox;
