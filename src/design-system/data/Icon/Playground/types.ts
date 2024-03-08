export const appearanceOptions = [
  "primary",
  "danger",
  "warning",
  "success",
  "help",
  "light",
  "gray",
  "dark",
] as const;

export const spacingOptions = ["wide", "compact", "none"] as const;

export const variant = ["filled", "outlined", "none"] as const;

export const shape = ["circle", "rectangle"] as const;

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
}

export interface ItextfieldProps {
  size: string;
}

export interface IswitchChecked {
  cursorHover: boolean;
  disabled: boolean;
  parentHover: boolean;
}
