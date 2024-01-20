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
  [key: string]: string;
}

export interface ItextfieldProps {
  htmlFor: string;
  children: string;
  margin: string;
  padding: string;
  [key: string]: string;
}

export interface IswitchChecked {
  cursorHover: boolean;
  disabled: boolean;
  parentHover: boolean;
  [key: string]: boolean;
}
