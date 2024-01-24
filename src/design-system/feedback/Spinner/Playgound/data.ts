import { IOptions, appearanceOptions, sizeOptions } from "./type";

export const options: IOptions[] = [
  {
    nameProps: "appearance",
    typeControl: "Select",
    option: appearanceOptions.map((appearanceOption) => ({
      id: appearanceOption,
      label: appearanceOption,
      disabled: false,
    })),
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
    nameProps: "transparent",
    typeControl: "Switch",
  },
];
