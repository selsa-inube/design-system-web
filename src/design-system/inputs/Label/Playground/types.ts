export const htmlForOptions: readonly string[] = ["id"];
export const sizeOptions: readonly string[] = ["small", "medium", "large"];

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
  htmlFor: (typeof htmlForOptions)[number];
  size: (typeof sizeOptions)[number];
  [key: string]: string;
}

export interface ItextfieldProps {
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
