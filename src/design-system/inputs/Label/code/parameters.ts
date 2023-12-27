import { InformationsProps } from "../../../../components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "children",
    description: "Component text content",
    type: "React.ReactNode",
  },
  {
    nameProps: "htmlFor",
    description: "Useful to match this label with the id of a specific entry",
    type: "string",
  },
  {
    nameProps: "disabled",
    description: "Indicates wheter the text is in its disabled state",
    type: "boolean",
  },
  {
    nameProps: "focused",
    description: "Indicates wheter the text is in its focused state",
    type: "boolean",
  },
  {
    nameProps: "invalid",
    description: "Indicates the possible states in witch the label could be",
    type: "boolean",
  },
  {
    nameProps: "margin",
    description:
      "Sets the margin in px or global values for all four sides of the component",
    type: "string",
  },
  {
    nameProps: "padding",
    description:
      "Sets the padding in px or global values for all four sides of the component",
    type: "string",
  },
  {
    nameProps: "size",
    description: "Indicates the font size used in the component",
    type: "string: 'small' | 'medium' | 'large'",
  },
];
