import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Loader from "../../../../components/loader/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData } from "../../types/ProductTypes";
import { productSchema } from "../../schema/productSchema";
import dayjs from "dayjs";
import { SelectOptionType } from "../../types/selectType";
import { RadioOptionTypes } from "../../types/radioType";
import InputTextField from "../../../../components/forms/InputTextField";
import InputNumberField from "../../../../components/forms/InputNumberField";
import RadioGroupField from "../../../../components/forms/RadioField";
import SelectField from "../../../../components/forms/SelectField";
import DatePickerField from "../../../../components/forms/DatePickerField";

type ProductFormsProps = {
  defaultValues?: ProductFormData;
  onSubmit: (data: ProductFormData) => void;
  isUpdating?: boolean;
  isLoading?: boolean;
};

const selectOption: SelectOptionType[] = [
  { value: "veg", label: "Veg" },
  { value: "non-veg", label: "Non-Veg" },
];

const radioOptions: RadioOptionTypes[] = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const ProductForms: React.FC<ProductFormsProps> = ({
  defaultValues,
  onSubmit,
  isUpdating = false,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  return (
    <Box component="form" marginTop={2} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={700}>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <InputTextField
            label="Product Name"
            fieldName="name"
            register={register}
            errors={errors}
          />
          <InputTextField
            label="Brand"
            fieldName="brand"
            register={register}
            errors={errors}
          />
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <InputNumberField
            label="Price"
            fieldName="price"
            register={register}
            errors={errors}
          />
          <InputNumberField
            label="Quantity"
            fieldName="quantity"
            register={register}
            errors={errors}
          />
        </Box>
        <InputTextField
          label="Product Description"
          fieldName="desc"
          register={register}
          errors={errors}
        />
        <RadioGroupField
          name="isAvailable"
          control={control}
          label="Available"
          options={radioOptions}
        />
        <SelectField
          name="category"
          control={control}
          options={selectOption}
          placeholder="Select a category"
          isClearable
        />
        <DatePickerField
          name="expireDate"
          control={control}
          label="Expiry Date"
          defaultValue={dayjs()}
          errors={errors}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: 200, alignItems: "center" }}
          >
            {isLoading ? (
              <>
                <Loader />
                <Typography variant="body1" marginLeft={2}>
                  {isUpdating ? "Updating Product..." : "Adding Product..."}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">
                {isUpdating ? "Update Product" : "Add Product"}
              </Typography>
            )}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductForms;
