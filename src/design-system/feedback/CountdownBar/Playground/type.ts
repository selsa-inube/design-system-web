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
}

export interface ItextfieldProps {
  height: string;
  duration: number;
}

export interface IswitchChecked {
  paused: boolean;
}
