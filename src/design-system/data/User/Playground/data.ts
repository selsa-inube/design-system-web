import { sizeOption, Ioptions } from "./types";

export const optionsUser: Ioptions[] = [
  {
    nameProps: "userName",
    typeControl: "Textfield",
  },
  {
    nameProps: "client",
    typeControl: "Textfield",
  },
  {
    nameProps: "size",
    typeControl: "Select",
    option: sizeOption.map((sizeOption) => ({
      id: sizeOption,
      label: sizeOption,
      disabled: false,
    })),
  },
];
