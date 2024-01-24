export const appearanceOptions = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
  "link",
  "divider",
  "spinner",
] as const;

export const sizeOptions = ["small", "medium", "large"] as const;

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
  appearance: (typeof appearanceOptions)[number];
  size: (typeof sizeOptions)[number];
}

export interface IswitchChecked {
  transparent: boolean;
}
