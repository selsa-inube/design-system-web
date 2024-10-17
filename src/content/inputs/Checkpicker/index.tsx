import { InputTokens } from "@inubekit/input";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Checkpicker } from "@inubekit/checkpicker";

const inputTokensConfig = {
  businessUnit: "inube",
  component: "select",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
  ],
};

const checkpicker = {
  description:
    "The Checkpicker component allows users to select multiple options from a list. It uses a dropdown interface and displays the selected values.",
  example: Checkpicker,
  name: "Checkpicker",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/s5g4c2?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Checkpicker"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    disabled: false,
    fullwidth: false,
    id: "checkpicker-1",
    invalid: false,
    label: "Select Options",
    maxItems: 5,
    message: "Pick your options",
    name: "checkpickerGroup",
    onChange: () => {},
    options: [],
    placeholder: "Select multiple options",
    required: false,
    size: "medium",
    values: "",
  },
  propTypes: {
    disabled: {
      description:
        "Indicates if the Checkpicker is disabled, preventing user interaction.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    fullwidth: {
      description:
        "If set to true, the Checkpicker will take up the full width of its container.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    id: {
      description:
        "The unique identifier for the Checkpicker, necessary for accessibility.",
      type: "string",
    },
    invalid: {
      description:
        "Indicates if the Checkpicker has an invalid state for form validation.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description:
        "A text label for the Checkpicker, displayed next to the dropdown field.",
      type: "string",
    },
    maxItems: {
      description:
        "The maximum number of items displayed before enabling a scrollbar.",
      type: "number",
      table: {
        defaultValue: { summary: 5 },
      },
    },
    message: {
      description:
        "A message to guide the user when interacting with the Checkpicker.",
      type: "string",
    },
    name: {
      description: "The name attribute, used to group checkboxes together.",
      type: "string",
    },
    onChange: {
      description:
        "A function triggered when the selected options change. It receives the `name` and `values` as parameters.",
      type: "(name: string, values: string) => void",
    },
    options: {
      description:
        "An array of options available for selection in the Checkpicker.",
      type: "IOption[]",
    },
    placeholder: {
      description:
        "A placeholder text displayed inside the Checkpicker before any selection is made.",
      type: "string",
    },
    required: {
      description:
        "Specifies whether the Checkpicker is required for form submission.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      description:
        "Defines the size of the Checkpicker (small, medium, large).",
      type: "'small' | 'medium' | 'large'",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    values: {
      description: "The currently selected values in the Checkpicker.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { checkpicker };
