import { Fieldset, FieldsetTokens } from "@inubekit/fieldset";
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
  description:
    "The Fieldset component groups related content together with a visible legend, providing a structured and accessible way to display information.",
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
      title="Fieldset"
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
        "A string that represents the title or heading for the Fieldset component. It is displayed in the legend area and provides context for the grouped content.",
      type: "string",
    },
    children: {
      description:
        "A prop that accepts React nodes as its value. This is used to render the content within the Fieldset, such as form fields or descriptive text.",
      type: "React.ReactNode",
    },
    spacing: {
      description:
        "Controls the spacing within the Fieldset, particularly around the legend and content area. Options include 'compact' for tighter spacing and 'wide' for more spacious layouts.",
      type: "IFieldsetSpacing",
      options: [
        { id: "compact", label: "Compact" },
        { id: "wide", label: "Wide" },
      ],
    },
  },
  tokens: buildTokenDescriptions(FieldsetTokens, fieldsetTokensConfig),
};

export { fieldset };
