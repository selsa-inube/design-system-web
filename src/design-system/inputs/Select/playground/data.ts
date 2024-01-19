import { IOptions } from "./types";

const statusOptions = ["pending", "invalid", "valid"] as const;

const sizeOptions = ["wide", "compact"] as const;

export const optionSelect = [
  { id: "opcion1", label: "opcion 1", disabled: false },
  { id: "opcion2", label: "opcion 2", disabled: false },
  { id: "opcion3", label: "opcion 3", disabled: false },
];

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
    nameProps: "status",
    typeControl: "Select",
    option: statusOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
  },
  {
    nameProps: "size",
    typeControl: "Select",
    option: sizeOptions.map((item) => ({
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
