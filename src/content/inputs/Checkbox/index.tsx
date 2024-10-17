import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Checkbox } from "@inubekit/checkbox";
import { InputTokens } from "@inubekit/input";

const inputTokensConfig = {
  businessUnit: "inube",
  component: "checkbox",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
  ],
};

const checkbox = {
  description:
    "The Checkbox component allows users to select one or more options from a list. It supports indeterminate and checked states, with customizable labels and appearances.",
  example: Checkbox,
  name: "Checkbox",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/zqsl2h?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Checkbox"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    id: "checkbox-1",
    name: "checkboxGroup",
    value: "option1",
    checked: false,
    indeterminate: false,
    label: "Checkbox Label",
    disabled: false,
    required: false,
    onChange: () => {},
  },
  propTypes: {
    id: {
      description:
        "The unique identifier for the checkbox, necessary for accessibility.",
      type: "string",
      table: {
        defaultValue: { summary: "checkbox" },
      },
    },
    name: {
      description: "The name attribute, used to group checkboxes together.",
      type: "string",
    },
    value: {
      description:
        "The value associated with the checkbox, representing the selected option.",
      type: "string",
    },
    checked: {
      description: "Specifies whether the checkbox is selected by default.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      description:
        "Specifies if the checkbox is in an indeterminate state (partially selected).",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description:
        "A text label for the checkbox, displayed next to the input field.",
      type: "string",
    },
    disabled: {
      description:
        "Indicates whether the checkbox is disabled, preventing user interaction.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      description: "Specifies whether the checkbox is required in the form.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    onChange: {
      description: "A function triggered when the checkbox value changes.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { checkbox };
