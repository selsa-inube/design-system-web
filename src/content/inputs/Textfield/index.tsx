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
  description: "This component uses a filled primary icon for all applications",
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
      description: "prompts the user what value to enter",
      type: "input",
    },
    name: {
      description: "name of the input element",
      type: "input",
    },
    id: {
      description:
        "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
      type: "input",
    },
    placeholder: {
      description: "text to display in the text field whenever it is empty",
      type: "input",
    },
    disabled: {
      description:
        "sets the field as to appear disabled, users will not be able to interact with the text field",
    },
    type: {
      description: "class name to apply to the input element",
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
      description: "component initial value",
    },
    onChange: {
      description:
        "allows you to control what to do when the user changes the value of the component",
      type: "Event",
    },
    iconBefore: {
      description:
        "allows to enter an icon to the left of the area where the user enters values",
      type: "ReactElement",
    },
    iconAfter: {
      description:
        "allows to enter an icon to the right of the area where the user enters values",
      type: "ReactElement",
    },
    required: {
      description: "defines if the field is required or not",
    },
    status: {
      description: "status of the component",
      type: "ITextfieldStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    message: {
      description:
        "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
      type: "string",
    },
    size: {
      description: "defines the size of the component",
      type: "ITextfieldSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description: "option to fit field width to its parent width",
    },
  },
  tokens: buildTokenDescriptions(inube.input, inputTokensConfig),
};

export { textfield };
