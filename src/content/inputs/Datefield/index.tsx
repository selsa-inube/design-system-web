import { DatefieldController } from "./Controller/Datefield.Controller";
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

const datefield = {
  description: "This component uses a filled primary icon for all applications",
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
      title="Avatar"
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
    disabled: {
      description:
        "sets the field as to appear disabled, users will not be able to interact with the text field",
    },
    value: {
      description: "component initial value",
    },
    onChange: {
      description:
        "allows you to control what to do when the user changes the value of the component",
    },
    required: {
      description: "defines if the field is required or not",
    },
    status: {
      description: "status of the component",
      type: "IDatefieldStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    message: {
      description:
        "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
    },
    size: {
      description: "defines the size of the component",
      type: "IDatefieldSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description: "option to fit field width to its parent width",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  tokens: buildTokenDescriptions(inube.input, inputTokensConfig),
};

export { datefield };
