import {
  appearanceOptions,
  spacingOptions,
  variant,
  shape,
  IOptions,
} from "./types";

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
    nameProps: "spacing",
    typeControl: "Select",
    option: spacingOptions.map((spacingOption) => ({
      id: spacingOption,
      label: spacingOption,
      disabled: false,
    })),
  },
  {
    nameProps: "variant",
    typeControl: "Select",
    option: variant.map((variantOption) => ({
      id: variantOption,
      label: variantOption,
      disabled: false,
    })),
  },
  {
    nameProps: "shape",
    typeControl: "Select",
    option: shape.map((shapeOption) => ({
      id: shapeOption,
      label: shapeOption,
      disabled: false,
    })),
  },
  {
    nameProps: "size",
    typeControl: "Textfield",
  },
  {
    nameProps: "cursorHover",
    typeControl: "Switch",
  },
  {
    nameProps: "disabled",
    typeControl: "Switch",
  },
  {
    nameProps: "parentHover",
    typeControl: "Switch",
  },
];
