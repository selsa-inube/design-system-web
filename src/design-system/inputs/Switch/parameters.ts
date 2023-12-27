import { InformationsProps } from "../../../components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "id",
    description:
      "This element can have a label on it, so this id allows us to connect the label with the switch",
    type: "string",
  },
  {
    nameProps: "disabled",
    description: "Indicates wheter the switch is in its disabled state",
    type: "boolean",
  },
  {
    nameProps: "name",
    description:
      "Descriptive name for value property to be submitted in a form",
    type: "string",
  },
  {
    nameProps: "value",
    description: "value to be submitted in a form",
    type: "string",
  },
  {
    nameProps: "size",
    description: "toggle size",
    type: "string: 'small' | 'large'",
  },
  {
    nameProps: "checked",
    description: "Indicates wheter the switch is in its checked state",
    type: "boolean",
  },

  {
    nameProps: "label",
    description: "Component text content",
    type: "String",
  },

  {
    nameProps: "onChange",
    description:
      "Is a function that the component receives and that can be executed every time the switch state is modified",
    type: "function: (event: React.ChangeEvent<HTMLInputElement>) => void",
  },
  {
    nameProps: "size",
    description: "Indicates the size of the switch",
    type: "string: 'small' | 'medium' | 'large'",
  },
  {
    nameProps: "margin",
    description:
      "Sets the margin in px or global values for all four sides of the component. Accepted values are the spacing tokens",
    type: "string: 's0' | 's025' | 's050' | 's075' | 's100' | 's150' | 's200' | 's250' | 's300' | 's350' | 's400' | 's450' | 's500'  | 's600' | 's700' | 's800' ",
  },
  {
    nameProps: "padding",
    description:
      "Sets the padding in px or global values for all four sides of the component. Accepted values are the spacing tokens",
    type: "string: 's0' | 's025' | 's050' | 's075' | 's100' | 's150' | 's200' | 's250' | 's300' | 's350' | 's400' | 's450' | 's500'  | 's600' | 's700' | 's800' ",
  },
];
