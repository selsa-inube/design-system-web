import { appearanceOptions } from "@components/data/ControlsPlaygroundTemplete/types";
import { IOptions } from "@components/feedback/ControlsPlayground";

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
    nameProps: "label",
    typeControl: "Textfield",
  },
];
