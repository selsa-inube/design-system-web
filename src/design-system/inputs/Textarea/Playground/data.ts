import { IOptions } from "./types";

const statusOptions: readonly string[] = ["pending", "invalid", "valid"];

export const options: IOptions[] = [
  {
    nameProps: "id",
    typeControl: "Textfield",
  },
  {
    nameProps: "name",
    typeControl: "Textfield",
  },

  {
    nameProps: "placeholder",
    typeControl: "Textfield",
  },
  {
    nameProps: "label",
    typeControl: "Textfield",
  },
  {
    nameProps: "value",
    typeControl: "Textfield",
  },
  {
    nameProps: "status",
    typeControl: "Select",
    option: statusOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },
  {
    nameProps: "lengthThreshold",
    typeControl: "Textfield",
  },

  {
    nameProps: "fullwidth",
    typeControl: "Switch",
  },
  {
    nameProps: "disabled",
    typeControl: "Switch",
  },
  {
    nameProps: "required",
    typeControl: "Switch",
  },
  {
    nameProps: "readonly",
    typeControl: "Switch",
  },
];
