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

//type typeKeySelect = "type" | "status";

export interface IselectProps {
  type: string;
  status: string;
  size: string;
}

export interface ItextfieldProps {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value: string;
}

export interface IswitchChecked {
  fullwidth: boolean;
  disabled: boolean;
  required: boolean;
  readOnly: boolean;
}
