import React from "react";
import { Button } from "@mui/material";
import { Product } from "../types/ProductTypes";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Delete } from "@mui/icons-material";

type ActionButtonProps = {
  product: Product;
  handleOpen: (product: Product) => void;
  handleDelete: (id: string) => void;
};

export const ActionButtons = React.memo(
  ({ product, handleOpen, handleDelete }: ActionButtonProps) => (
    <div>
      <Button onClick={() => handleOpen(product)}>
        <EditSharpIcon />
      </Button>
      <Button onClick={() => handleDelete(product._id)}>
        <Delete />
      </Button>
    </div>
  )
);
