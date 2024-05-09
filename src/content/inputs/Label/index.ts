import { LabelController } from "./Controller/Label.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const labelTokensConfig = {
  businessUnit: "inube",
  component: "label",
  block: "content",
  element: "color",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
    { id: "reference", order: 7 },
  ],
};

const label = {
  description: "This component uses a filled primary icon for all applications",
  example: LabelController,
  name: "Label",
  props: {
    htmlFor: "id",
    children: "Label Text",
    size: "large",
    disabled: false,
    focused: false,
    invalid: false,
    margin: "0px",
    padding: "0px",
  },
  propTypes: {
    disabled: {
      description: "indicates wheter the text is in its disabled state",
    },
    focused: {
      description: "indicates wheter the text is in its focused state",
    },
    htmlFor: {
      description: "Useful to match this label with the id of a specific entry",
    },
    invalid: {
      description: "Indicates the possible states in witch the label could be",
    },
    margin: {
      description:
        "Sets the margin in px or global values for all four sides of the component.",
    },
    padding: {
      description:
        "Sets the padding in px or global values for all four sides of the component",
    },
    size: {
      description: "indicates the font size used in the component",
      type: "ILabelSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    children: {
      description: "component text content",
    },
  },
  tokens: buildTokenDescriptions(inube.label, labelTokensConfig),
};

export { label };
