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
  id: string;
  filter: string;
  pageLength: number;
  modalTitle: string;
  infoTitle: string;
  actionsTitle: string;
}
