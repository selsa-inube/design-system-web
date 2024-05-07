import { Textfield } from "@inubekit/textfield";

const textfield = {
  description: "This component uses a filled primary icon for all applications",
  example: Textfield,
  name: "Textfield",
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
    },
    name: {
      description: "name of the input element",
    },
    id: {
      description:
        "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
    },
    placeholder: {
      description: "text to display in the text field whenever it is empty",
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
    },
    iconBefore: {
      description:
        "allows to enter an icon to the left of the area where the user enters values",
    },
    iconAfter: {
      description:
        "allows to enter an icon to the right of the area where the user enters values",
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
};

export { textfield };
