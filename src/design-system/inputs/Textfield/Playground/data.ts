import { IOptions } from "./type";

const statusOptions = ["pending", "invalid", "valid"] as const;

const typeOptions = [
  "text",
  "password",
  "email",
  "number",
  "search",
  "tel",
] as const;

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
    nameProps: "type",
    typeControl: "Select",
    option: typeOptions.map((item) => ({
      id: item,
      label: item,
      disabled: false,
    })),
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
