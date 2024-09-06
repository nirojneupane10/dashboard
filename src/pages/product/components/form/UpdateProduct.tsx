import { useUpdateProduct } from "../../hooks/useProductUpdate";
import { Product } from "../../types/ProductTypes";
import ProductForms from "./ProductForm";
import dayjs from "dayjs";

type UpdateProductFormsProps = {
  product: Product;
};

const UpdateProductForms: React.FC<UpdateProductFormsProps> = ({ product }) => {
  const productWithDayjsDate = {
    ...product,
    expireDate: dayjs(product.expireDate),
  };

  const { onSubmit, mutation } = useUpdateProduct(
    productWithDayjsDate,
    product._id
  );

  return (
    <ProductForms
      defaultValues={productWithDayjsDate}
      onSubmit={onSubmit}
      isUpdating={true}
      isLoading={mutation.isPending}
    />
  );
};

export default UpdateProductForms;
