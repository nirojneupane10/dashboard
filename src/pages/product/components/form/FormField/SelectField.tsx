import { Controller, Control, FieldValues, Path } from "react-hook-form";
import Select from "react-select";

type SelectOptionType = {
  value: string;
  label: string;
};

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  options: SelectOptionType[];
  placeholder?: string;
  isClearable?: boolean;
};

const SelectField = <T extends FieldValues>({
  name,
  control,
  options,
  placeholder = "Select an option",
  isClearable = false,
}: SelectFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          options={options}
          onChange={(selectedOption) => onChange(selectedOption?.value)}
          value={options.find((option) => option.value === value)}
          placeholder={placeholder}
          isClearable={isClearable}
        />
      )}
    />
  );
};

export default SelectField;
