import { TextfieldController } from "./Controller/Textfield.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

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

const textfield = {
  description:
    "The Textfield component allows users to input and edit text in a form. It can include labels, icons, and messages to provide contextual information or feedback.",
  example: TextfieldController,
  name: "Textfield",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/z3syvh?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Textfield"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    label: "Username",
    name: "Username",
    id: "Username",
    placeholder: "Write your full name",
    value: "",
    size: "wide",
    disabled: false,
    required: false,
    type: "text",
    message: "",
    fullwidth: false,
  },
  propTypes: {
    label: {
      description:
        "Prompts the user on what value to enter, typically displayed as a label near the text field.",
      type: "string",
    },
    name: {
      description:
        "The name of the input element, used to identify the data in form submissions.",
      type: "string",
    },
    id: {
      description:
        "Uniquely identifies the Textfield Component. It links the label element to the input element using the label's htmlFor attribute.",
      type: "string",
    },
    placeholder: {
      description:
        "Text displayed inside the text field when it is empty, providing an example or hint of the expected input.",
      type: "string",
    },
    disabled: {
      description:
        "When set to true, the text field is non-interactive and appears dimmed, indicating that it cannot be edited.",
      type: "boolean",
    },
    type: {
      description:
        "Specifies the input type, such as 'text', 'email', 'number', 'password', 'search', or 'tel'. This determines the kind of data the field accepts and how it behaves.",
      type: "ITextfieldInputType",
      options: [
        { id: "text", label: "Text" },
        { id: "email", label: "Email" },
        { id: "number", label: "Number" },
        { id: "password", label: "Password" },
        { id: "search", label: "Search" },
        { id: "tel", label: "Tel" },
      ],
    },
    value: {
      description:
        "The initial value of the component, which can be controlled programmatically. This is particularly useful in controlled components.",
      type: "string | number",
    },
    onChange: {
      description:
        "A function that handles changes to the input value, typically updating the state in a parent component.",
      type: "function",
    },
    iconBefore: {
      description:
        "Allows the inclusion of an icon before the text input, providing additional context or functionality.",
      type: "React.ReactNode",
    },
    iconAfter: {
      description:
        "Allows the inclusion of an icon after the text input, often used for actions like clearing the input.",
      type: "React.ReactNode",
    },
    required: {
      description:
        "Indicates whether the field is required. If true, the form cannot be submitted unless this field is filled.",
      type: "boolean",
    },
    status: {
      description:
        "The validation status of the component, such as 'invalid' for errors or 'pending' for ongoing validation.",
      type: "ITextfieldStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    message: {
      description:
        "Displays a message related to the input field, such as a validation error or guidance text.",
      type: "string",
    },
    size: {
      description:
        "Defines the size of the component, affecting its height and layout. Options include 'wide' and 'compact'.",
      type: "ITextfieldSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description:
        "When set to true, the text field expands to fill the full width of its parent container.",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(inube.input, inputTokensConfig),
};

export { textfield };
