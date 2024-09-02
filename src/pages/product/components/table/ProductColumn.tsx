import { MRT_ColumnDef } from "material-react-table";
import { Product } from "../../types/ProductTypes";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import EditSharpIcon from "@mui/icons-material/EditSharp";

export const columns = (
  handleOpen: (product: Product) => void
): MRT_ColumnDef<Product>[] => [
  {
    accessorKey: "name",
    header: "Product Name",
    size: 150,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    size: 150,
  },
  {
    accessorKey: "price",
    header: "Price",
    size: 150,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    size: 150,
  },
  {
    header: "Actions",
    size: 150,
    Cell: ({ row }) => {
      const { handleDelete } = useDeleteProduct();

      return (
        <div>
          <Button onClick={() => handleOpen(row.original)}>
            <EditSharpIcon />
          </Button>
          <Button onClick={() => handleDelete(row.original._id)}>
            <Delete />
          </Button>
        </div>
      );
    },
  },
];
