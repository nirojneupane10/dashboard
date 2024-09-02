import { MaterialReactTable } from "material-react-table";
import { columns } from "./ProductColumn";
import { useProduct } from "../../hooks/useGetProduct";
import { Product } from "../../types/ProductTypes";

type ProductTableProps = {
  handleOpen: (product: Product) => void;
};

const ProductTable: React.FC<ProductTableProps> = ({ handleOpen }) => {
  const { data } = useProduct();

  return (
    <MaterialReactTable
      columns={columns(handleOpen)}
      data={data ?? []}
      enableRowSelection
    />
  );
};

export default ProductTable;
