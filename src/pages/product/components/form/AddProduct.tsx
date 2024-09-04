import { useProductForm } from "../../hooks/useAddProduct";
import ProductForms from "./ProductForm";

const AddProduct: React.FC = () => {
  const { onSubmit, mutation } = useProductForm();

  return <ProductForms onSubmit={onSubmit} isLoading={mutation.isPending} />;
};

export default AddProduct;
