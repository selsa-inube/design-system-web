import { SelectController } from "./Controller/Select.Controller";

const select = {
  description:
    "The Select component allows users to make a single or multiple selections from a list of options, providing a dropdown interface for easy selection.",
  example: SelectController,
  name: "Select",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/qfwq7p?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Select"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
      description:
        "Prompts the user on what value to select, typically displayed as a label near the dropdown.",
      type: "string",
    },
    name: {
      description:
        "The name of the select element, used to identify the data in form submissions.",
      type: "string",
    },
    id: {
      description:
        "A unique identifier for the Select component, linking the label to the input field through the label's htmlFor attribute.",
      type: "string",
    },
    placeholder: {
      description:
        "Text to display in the select field whenever no selection is made, guiding the user.",
      type: "string",
    },
    disabled: {
      description:
        "When set to true, the select field is non-interactive and appears dimmed, indicating that it cannot be edited.",
      type: "boolean",
    },
    value: {
      description:
        "The current value of the select field, representing the selected option.",
      type: "string | number",
    },
    onChange: {
      description:
        "A function that handles changes to the select value, typically used to update the component's state.",
      type: "function",
    },
    required: {
      description:
        "Indicates whether the field must be filled before form submission.",
      type: "boolean",
    },
    status: {
      description:
        "Indicates the validation status of the select field, such as 'invalid' for errors, 'valid' for correct selection, or 'pending' for ongoing validation.",
      type: "ISelectStatus",
      options: [
        { id: "valid", label: "Valid" },
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    errorMessage: {
      description:
        "A message displayed when there is an error in the field, providing feedback to the user.",
      type: "string",
    },
    validMessage: {
      description:
        "A message displayed when the field has been validated without errors, providing confirmation to the user.",
      type: "string",
    },
    size: {
      description:
        "Defines the size of the component, affecting its height and font size. Available options include 'wide' and 'compact'.",
      type: "ISelectSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    fullwidth: {
      description:
        "When set to true, the select field expands to fit the full width of its parent container.",
      type: "boolean",
    },
    onFocus: {
      description:
        "A function that handles the onFocus event, typically used for managing focus-related state changes.",
      type: "function",
    },
    onBlur: {
      description:
        "A function that handles the onBlur event, typically used for managing blur-related state changes.",
      type: "function",
    },
    options: {
      description:
        "An array of objects representing the available options in the select dropdown. Each object should have a predetermined structure, typically including properties like 'id', 'label', 'value', and 'disabled'.",
      type: "array",
    },
  },
};

export { select };
