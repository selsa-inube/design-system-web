import { IOptions, htmlForOptions, sizeOptions } from "./types";

export const optionsLabel: IOptions[] = [
  {
    nameProps: "htmlFor",
    typeControl: "Select",
    option: htmlForOptions.map((htmlForOption) => ({
      id: htmlForOption,
      label: htmlForOption,
      disabled: false,
    })),
  },
  {
    nameProps: "children",
    typeControl: "Textfield",
  },
  {
    nameProps: "size",
    typeControl: "Select",
    option: sizeOptions.map((sizeOption) => ({
      id: sizeOption,
      label: sizeOption,
      disabled: false,
    })),
  },
  {
    nameProps: "disabled",
    typeControl: "Switch",
  },
  {
    nameProps: "focused",
    typeControl: "Switch",
  },
  {
    nameProps: "invalid",
    typeControl: "Switch",
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
