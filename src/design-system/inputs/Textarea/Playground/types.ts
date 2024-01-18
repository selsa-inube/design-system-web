export const appearanceOptions: readonly string[] = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
];

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
  status: string;
}

export interface ItextfielProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  lengthThreshold: string;
}

export interface IswitchProps {
  fullwidth: boolean;
  disabled: boolean;
  required: boolean;
  readonly: boolean;
}
