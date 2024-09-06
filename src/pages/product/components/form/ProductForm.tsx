import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Loader from "../../../../components/loader/Loader";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData } from "../../types/ProductTypes";
import { productSchema } from "../../schema/productSchema";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SelectOptionType } from "../../types/selectType";
import InputTextField from "./FormField/InputTextField";
import InputNumberField from "./FormField/InputNumberField";
import SelectField from "./FormField/SelectField";

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
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h4" gutterBottom>
        {isUpdating ? "Update Product" : "Add Product"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={500}>
          <InputTextField
            label="Product Name"
            fieldName="name"
            register={register}
            errors={errors}
          />
          <InputTextField
            label="Product Description"
            fieldName="desc"
            register={register}
            errors={errors}
          />
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

          <InputTextField
            label="Brand"
            fieldName="brand"
            register={register}
            errors={errors}
          />
          <SelectField
            name="category"
            control={control}
            options={selectOption}
            placeholder="Select a category"
            isClearable
          />
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Available</Typography>
            <Controller
              name="isAvailable"
              control={control}
              defaultValue={true}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  row
                  value={value}
                  onChange={(e) => onChange(e.target.value === "true")}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="expireDate"
              control={control}
              defaultValue={dayjs()}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  label="Expiry Date"
                  value={value}
                  onChange={(date: Dayjs | null) => onChange(date)}
                  slotProps={{
                    textField: {
                      error: !!errors.expireDate,
                      helperText: errors.expireDate?.message,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <Button type="submit" variant="contained">
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
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductForms;
