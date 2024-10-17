import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";
import { Radio } from "@inubekit/radio";

const inputTokensConfig = {
  businessUnit: "inube",
  component: "input",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
  ],
};

const radio = {
  description:
    "The Radio component allows users to select a single option from a list of mutually exclusive options, represented by circular buttons.",
  example: Radio,
  name: "Radio",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/yhkw4c?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Radio"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    checked: false,
    disabled: false,
    id: "radio-1",
    label: "Radio Label",
    name: "radioGroup",
    required: false,
    value: "option1",
  },
  propTypes: {
    checked: {
      description:
        "Specifies whether the radio button is selected by default or not.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description:
        "Indicates whether the radio button is disabled, preventing user interaction.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    id: {
      description:
        "The unique identifier for the radio button, necessary for accessibility.",
      type: "string",
      table: {
        defaultValue: { summary: "radio-1" },
      },
    },
    label: {
      description:
        "A text label for the radio button, displayed next to the input field.",
      type: "string",
    },
    name: {
      description:
        "The name attribute, used to group radio buttons together. Buttons with the same name are mutually exclusive.",
      type: "string",
    },
    onChange: {
      description:
        "A function triggered when the radio button is clicked or selected. It receives the event object.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
    required: {
      description:
        "Specifies whether the radio button is required in the form.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "The value associated with the radio button, representing the selected option.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { radio };
