import { TextField } from "@mui/material";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";

type InputTextFieldProps<T extends FieldValues> = {
  label: string;
  fieldName: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const InputNumberField = <T extends FieldValues>({
  label,
  fieldName,
  register,
  errors,
}: InputTextFieldProps<T>) => {
  return (
    <TextField
      label={label}
      type="number"
      {...register(fieldName, {
        valueAsNumber: true,
      })}
      error={!!errors[fieldName]}
      helperText={errors[fieldName]?.message as string}
      fullWidth
    />
  );
};

export default InputNumberField;
