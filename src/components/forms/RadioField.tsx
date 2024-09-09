import { Controller, Control, Path, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

type RadioOption = {
  label: string;
  value: boolean;
};

type RadioGroupFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: RadioOption[];
  row?: boolean;
};

const RadioGroupField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  row = true,
}: RadioGroupFieldProps<T>) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            row={row}
            value={value}
            onChange={(e) => onChange(e.target.value === "true")}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value.toString()}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioGroupField;
