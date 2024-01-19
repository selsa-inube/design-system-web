import {
  IOptions,
  appearanceOptions,
  spacingOptions,
  typeButton,
  variantOptions,
} from "./type";

export const options: IOptions[] = [
  {
    nameProps: "children",
    typeControl: "Textfield",
  },
  {
    nameProps: "appearance",
    typeControl: "Select",
    option: appearanceOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },
  {
    nameProps: "path",
    typeControl: "Textfield",
  },
  {
    nameProps: "loading",
    typeControl: "Switch",
  },

  {
    nameProps: "disabled",
    typeControl: "Switch",
  },

  {
    nameProps: "type",
    typeControl: "Select",
    option: typeButton.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },

  {
    nameProps: "spacing",
    typeControl: "Select",
    option: spacingOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },
  {
    nameProps: "variant",
    typeControl: "Select",
    option: variantOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },

  {
    nameProps: "fullwidth",
    typeControl: "Switch",
  },

  {
    nameProps: "cursorHover",
    typeControl: "Switch",
  },
  {
    nameProps: "parentHover",
    typeControl: "Switch",
  },
];
