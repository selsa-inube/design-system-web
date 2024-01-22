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
] as const;

export const typeButton = ["button", "submit", "reset", "linik"] as const;

export const spacingOptions = ["wide", "compact"] as const;

export const variantOptions = ["filled", "outline", "none"] as const;

export interface IselectProps {
  appearance: (typeof appearanceOptions)[number];
  type: (typeof typeButton)[number];
  spacing: (typeof spacingOptions)[number];
  variant: (typeof variantOptions)[number];
}

export interface ItextfielProps {
  children: string;
  path: string;
}

export interface IswitchProps {
  loading: boolean;
  disabled: boolean;
  fullwidth: boolean;
  cursorHover: boolean;
  parentHover: boolean;
}

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
