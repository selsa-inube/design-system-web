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

export const spacingOptions: readonly string[] = ["wide", "compact", "none"];

export const variant: readonly string[] = ["filled", "outlined", "none"];

export const shape: readonly string[] = ["circle", "rectangle"];

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
  spacing: (typeof spacingOptions)[number];
  variant: (typeof variant)[number];
  shape: (typeof shape)[number];
  [key: string]: string;
}

export interface ItextfieldProps {
  size: string;
  [key: string]: string;
}

export interface IswitchChecked {
  cursorHover: boolean;
  disabled: boolean;
  parentHover: boolean;
  [key: string]: boolean;
}
