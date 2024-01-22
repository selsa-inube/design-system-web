import { IOptions, appearanceOptions } from "./type";

export const options: IOptions[] = [
  {
    nameProps: "height",
    typeControl: "Textfield",
  },
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
    nameProps: "duration",
    typeControl: "Textfield",
  },
  {
    nameProps: "paused",
    typeControl: "Switch",
  },
];
