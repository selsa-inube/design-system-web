export const typesOptions = ["tabs", "select"] as const;

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
  type: (typeof typesOptions)[number];
}

export interface ItextfieldProps {
  selectedTab: string;
}
