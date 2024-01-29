export const optionsValue: readonly string[] = ["1", "2", "3", "4", "5", "6"];

interface IOption {
  id: string;
  label: string;
  disabled: boolean;
}

export interface IOptions {
  nameProps: string;
  typeControl: "Select" | "Textfield" | "Switch";
  option?: IOption[];
}

export interface IselectProps {
  options: (typeof optionsValue)[number];
}
