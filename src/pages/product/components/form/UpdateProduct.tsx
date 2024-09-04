import { useUpdateProduct } from "../../hooks/useProductUpdate";
import { Product } from "../../types/ProductTypes";
import ProductForms from "./ProductForm";

type UpdateProductFormsProps = {
  product: Product;
};

const UpdateProductForms: React.FC<UpdateProductFormsProps> = ({ product }) => {
  const { onSubmit, mutation } = useUpdateProduct(product, product._id);

  return (
    <ProductForms
      defaultValues={product}
      onSubmit={onSubmit}
      isUpdating={true}
      isLoading={mutation.isPending}
    />
  );
};

export default UpdateProductForms;
