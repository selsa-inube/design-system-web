import { SelectController } from "./Controller/Select.Controller";

const select = {
  description: "This component uses a filled primary icon for all applications",
  example: SelectController,
  name: "Select",
  props: {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "Placeholder",
    value: "Item 2",
    disabled: false,
    readonly: false,
    options: [
      { id: "1", label: "Item 1", value: "Item 1", disabled: false },
      { id: "2", label: "123", value: "123", disabled: false },
      { id: "3", label: "Item", value: "Item", disabled: false },
    ],
    required: false,
    size: "wide",
    status: "pending",
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
      type: "ISelectStatus",
      options: [
        { id: "valid", label: "Valid" },
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    errorMessage: {
      description: "show when the field is validated and there is an error",
    },
    validMessage: {
      description: "show when the field is validated without errors",
    },
    size: {
      description: "defines the size of the component",
      type: "ISelectSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description: "option to fit field width to its parent width",
    },
    onFocus: {
      description:
        "allows you to control what to do when the onfocus event occurs.",
    },
    onBlur: {
      description:
        "allows you to control what to do when the onblur event occurs.",
    },
    options: {
      description:
        "shall be designed to accept an array of objects with a predetermined structure.",
    },
  },
};

export { select };
