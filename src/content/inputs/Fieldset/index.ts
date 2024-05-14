import { Fieldset } from "@inubekit/fieldset";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const fieldsetTokensConfig = {
  businessUnit: "inube",
  component: "fieldset",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const fieldset = {
  description: "This component uses a filled primary icon for all applications",
  example: Fieldset,
  name: "Fieldset",
  props: {
    legend: "User Information",
    spacing: "wide",
  },
  propTypes: {
    legend: {
      description:
        "A string that represents the title or heading for the fieldset component.",
      type: "input",
    },
    children: {
      description:
        "A prop that expects React nodes as its value, used to render the content inside the fieldset.",
    },
    spacing: {
      description: "Controls the spacing of the legend",
      type: "IFieldsetSpacing",
      options: [
        { id: "compact", label: "Compact" },
        { id: "wide", label: "Wide" },
      ],
    },
  },
  tokens: buildTokenDescriptions(inube.fieldset, fieldsetTokensConfig),
};

export { fieldset };
