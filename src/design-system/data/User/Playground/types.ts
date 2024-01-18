export interface Ioptions {
  nameProps: string;
  typeControl: "Select" | "Textfield" | "Switch";
  option?: IOption[];
}
interface IOption {
  id: string;
  label: string;
  disabled: boolean;
}
export const sizeOption: readonly string[] = ["large", "small"];
export interface ItextfieldProps {
  id: string;
  userName: string;
  client: string;
  [key: string]: string;
}
export interface IselectProps {
  size: (typeof sizeOption)[number];
  [key: string]: string;
}
