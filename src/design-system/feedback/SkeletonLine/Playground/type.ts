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

export interface ItextfieldProps {
  width: string;
}

export interface IswitchChecked {
  animated: boolean;
}
