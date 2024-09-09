import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../../../../types/productTypes";

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
      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "80%",
            maxWidth: "800px",
            height: "80%",
            maxHeight: "650px",
          },
        }}
      >
        <DialogTitle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <span>Update Product</span>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {productData && <UpdateProductForms product={productData} />}
        </DialogContent>
      </Dialog>
    );
  }
);

export default DialogBox;
