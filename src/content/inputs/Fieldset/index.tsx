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
  frame: (
    <iframe
      src="https://codesandbox.io/embed/t2xgc7?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Avatar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
