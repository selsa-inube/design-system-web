import { IOptions, optionsValue } from "./type";

export const options: IOptions[] = [
  {
    nameProps: "options",
    typeControl: "Select",
    option: optionsValue.map((optionsValue) => ({
      id: optionsValue,
      label: optionsValue,
      disabled: false,
    })),
  },
];
