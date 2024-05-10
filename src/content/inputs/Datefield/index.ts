import { DatefieldController } from "./Controller/Datefield.Controller";

const datefield = {
  description: "This component uses a filled primary icon for all applications",
  example: DatefieldController,
  name: "Datefield",
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
    },
    name: {
      description: "name of the input element",
    },
    id: {
      description:
        "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
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
};

export { datefield };
