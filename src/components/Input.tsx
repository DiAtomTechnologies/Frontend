import { cn } from "@/lib/utils";
import { FC } from "react";

interface Input {
  placeholder: string;
  label: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<number>>;
  className ?: string;
  type: string;
}

const Input: FC<Input> = ({ placeholder, label, type, setValue, value, className }) => {
  return (
    <label className={cn("flex-col flex gap-2  ", className)}>
      <span className="text-md font-medium pl-2">{label}</span>
      <input
        placeholder={placeholder}
        className="border border-gray-300 px-4 py-3 rounded-md active:border-gray-700"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
      />
    </label>
  );
};

export default Input;
