import { Dialog, DialogTitle, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../../types/ProductTypes";
import UpdateProductForms from "../form/updateForm";

type DialogBoxProps = {
  openDialog: boolean;
  productData: Product | null;
  handleClose: () => void;
};
const DialogBox: React.FC<DialogBoxProps> = ({
  openDialog,
  productData,
  handleClose,
}) => {
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
      <UpdateProductForms product={productData} />
    </Dialog>
  );
};

export default DialogBox;
