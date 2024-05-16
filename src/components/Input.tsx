import { FC } from "react";

interface Input {
  placeholder: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
}

const Input: FC<Input> = ({ placeholder, label, type, setValue, value }) => {
  return (
    <label className="flex-col flex gap-2">
      <span className="text-md font-medium pl-2">{label}</span>
      <input
        placeholder={placeholder}
        className="border border-gray-300 px-4 py-3 max-w-2xl rounded-md active:border-gray-700"
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
