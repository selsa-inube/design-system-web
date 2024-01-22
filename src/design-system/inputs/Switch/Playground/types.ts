export const optionsValue: readonly string[] = [
  "switchTest1",
  "switchTest2",
  "switchTest3",
  "switchTest4",
];

export const optionSize: readonly string[] = ["small", "large"] as const;

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
  value: (typeof optionsValue)[number];
  size: (typeof optionSize)[number];
}

export interface ItextfieldProps {
  id: string;
  name: string;
  margin: string;
  padding: string;
}

export interface IswitchChecked {
  checked: boolean;
  disabled: boolean;
}
