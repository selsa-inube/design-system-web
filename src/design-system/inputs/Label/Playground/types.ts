export const sizeOptions = ["small", "medium", "large"] as const;

interface Ioption {
  id: string;
  label: string;
  disabled: boolean;
}
export interface IOptions {
  nameProps: string;
  typeControl: "Select" | "Textfield" | "Switch";
  option?: Ioption[];
}

export interface IselectProps {
  size: (typeof sizeOptions)[number];
}

export interface ItextfieldProps {
  htmlFor: string;
  children: string;
  margin: string;
  padding: string;
}

export interface IswitchChecked {
  focused: boolean;
  disabled: boolean;
  invalid: boolean;
}
