import React from "react";
import { MaterialReactTable } from "material-react-table";
import { useProduct } from "../../hooks/useGetProduct";
import { Product } from "../../types/ProductTypes";
import { useColumns } from "./ProductColumn";

type ProductTableProps = {
  handleOpen: (product: Product) => void;
};

const ProductTable: React.FC<ProductTableProps> = React.memo(
  ({ handleOpen }) => {
    const { data } = useProduct();
    const columns = useColumns(handleOpen);

    return (
      <MaterialReactTable
        columns={columns}
        data={data ?? []}
        enableRowSelection
      />
    );
  }
);

export default ProductTable;
