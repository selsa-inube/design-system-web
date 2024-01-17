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
  icon: string;
  [key: string]: string;
}
