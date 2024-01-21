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

export interface ItextfieldProps {
  size: string;
  [key: string]: string;
}

export interface IswitchChecked {
  animated: boolean;
  [key: string]: boolean;
}
