import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { Product } from "../../types/ProductTypes";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { ActionButtons } from "../../shared/ActionButton";

export const useColumns = (
  handleOpen: (product: Product) => void
): MRT_ColumnDef<Product>[] => {
  return useMemo(
    () => [
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
            <ActionButtons
              product={row.original}
              handleOpen={handleOpen}
              handleDelete={handleDelete}
            />
          );
        },
      },
    ],
    [handleOpen]
  );
};
