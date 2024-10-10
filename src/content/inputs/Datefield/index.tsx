import { DatefieldController } from "./Controller/Datefield.Controller";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";

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

const datefield = {
  description:
    "The Datefield component allows users to select or input a date, providing a user-friendly interface for date selection.",
  example: DatefieldController,
  name: "Datefield",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/wttyt9?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Datefield"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    label: "Date",
    name: "Date",
    id: "Date",
    value: "",
    size: "wide",
    disabled: false,
    required: false,
    message: "",
    fullwidth: false,
  },
  propTypes: {
    label: {
      description:
        "Prompts the user on what value to enter, typically displayed as a label near the date field.",
      type: "string",
    },
    name: {
      description:
        "The name of the input element, used to identify the data in form submissions.",
      type: "string",
    },
    id: {
      description:
        "A unique identifier for the Datefield component, linking the label to the input field through the label's htmlFor attribute.",
      type: "string",
    },
    disabled: {
      description:
        "When set to true, the date field is non-interactive and appears dimmed, indicating that it cannot be edited.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "The current value of the input field, formatted as a date string. Useful for controlled components where the value is managed externally.",
      type: "string | number",
    },
    onChange: {
      description:
        "A function that handles changes to the input value, typically used to update the component's state.",
      type: "function",
    },
    required: {
      description:
        "Indicates whether the input field is required. If true, the form cannot be submitted unless this field is filled.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    status: {
      description:
        "Indicates the validation status of the input, such as 'invalid' for errors or 'pending' for ongoing validation.",
      type: "IDatefieldStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
      table: {
        defaultValue: { summary: "pending" },
      },
    },
    message: {
      description:
        "A message displayed below the date field, providing feedback such as validation errors or additional instructions.",
      type: "string",
    },
    size: {
      description:
        "Defines the size of the date field, affecting its height and font size. Available options include 'wide' and 'compact'.",
      type: "IDatefieldSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description:
        "When set to true, the date field expands to fit the full width of its parent container.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { datefield };
