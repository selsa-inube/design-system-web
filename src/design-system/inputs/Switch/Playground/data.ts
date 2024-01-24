import { IOptions, optionsValue, optionSize } from "./types";
export const options: IOptions[] = [
  {
    nameProps: "id",
    typeControl: "Textfield",
  },
  {
    nameProps: "disabled",
    typeControl: "Switch",
  },
  {
    nameProps: "name",
    typeControl: "Textfield",
  },
  {
    nameProps: "value",
    typeControl: "Select",
    option: optionsValue.map((optionsValue) => ({
      id: optionsValue,
      label: optionsValue,
      disabled: false,
    })),
  },
  {
    nameProps: "checked",
    typeControl: "Switch",
  },
  {
    nameProps: "size",
    typeControl: "Select",
    option: optionSize.map((optionSize) => ({
      id: optionSize,
      label: optionSize,
      disabled: false,
    })),
  },
  {
    nameProps: "margin",
    typeControl: "Textfield",
  },
  {
    nameProps: "padding",
    typeControl: "Textfield",
  },
];
