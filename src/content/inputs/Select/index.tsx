import { SelectController } from "./Controller/Select.Controller";
import { Text } from "@inubekit/text";

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
        "A descriptive label for the Select field, prompting users on what they should select. Typically displayed above or beside the dropdown.",
      type: "string",
    },
    name: {
      description:
        "The name attribute of the Select field, used to identify the data when the form is submitted.",
      type: "string",
      required: true,
    },
    id: {
      description:
        "A unique identifier for the Select component. This ID is used to associate the label with the Select field and is essential for accessibility.",
      type: "string",
    },
    placeholder: {
      description:
        "Text displayed in the Select input when no option has been selected. It serves as a hint or prompt to the user.",
      type: "string",
    },
    disabled: {
      description:
        "When `true`, the Select field is disabled, making it non-interactive and visually dimmed to indicate that it's unavailable.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "The currently selected value in the Select field. This can either be a string or a number, depending on the selected option.",
      type: "string | number",
      required: true,
    },
    onChange: {
      description:
        "A function that handles changes in the Select field. This function is called whenever a user selects a different option, passing the name of the field and the newly selected value.",
      type: "(name: string, value: string) => void",
      required: true,
    },
    required: {
      description:
        "When `true`, the Select field becomes a required input, meaning that the user must select an option before submitting the form.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    status: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Indicates the validation status of the Select field. Available options include:"
          />
          <ul>
            <li>
              <strong>Valid</strong>: The field has a valid selection.
            </li>
            <li>
              <strong>Invalid</strong>: The field has an invalid selection.
            </li>
            <li>
              <strong>Pending</strong>: The field is in the process of
              validation.
            </li>
          </ul>
        </>
      ),
      type: "ISelectStatus",
      options: [
        { id: "valid", label: "Valid" },
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
      table: {
        defaultValue: { summary: "pending" },
      },
    },
    size: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Controls the size of the Select component, affecting its overall height and the font size of the displayed options. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: The Select component is larger, providing
              more space for displaying content.
            </li>
            <li>
              <strong>Compact</strong>: A smaller version of the Select
              component, which takes up less space."
            </li>
          </ul>
        </>
      ),
      type: "ISelectSize",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
      table: {
        defaultValue: { summary: "wide" },
      },
    },
    fullwidth: {
      description:
        "If `true`, the Select component will expand to fill the full width of its container, making it responsive to varying screen sizes.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    onBlur: {
      description:
        "A function that is triggered when the Select field loses focus. It can be used to perform validation or manage the component's state when the user navigates away from the field.",
      type: "(event: FocusEvent) => void",
    },
    onClick: {
      description:
        "A function that handles clicks on the Select component. This can be used to trigger custom actions when the component is clicked.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
    onFocus: {
      description:
        "A function that is triggered when the Select field gains focus. It is often used to open the dropdown or highlight the field.",
      type: "(event: FocusEvent) => void",
    },
    onKeyUp: {
      description:
        "Function to handle keyboard events in the Select field. This is often used for custom interactions or to handle keypresses like 'Enter' or 'Escape'.",
      type: "(event: React.KeyboardEvent<HTMLInputElement>) => void",
    },
    options: {
      description:
        "An array of objects that represent the available options for the Select dropdown. Each option object typically contains an 'id', 'label', and 'value'.",
      type: "IOption[ ]",
      required: true,
    },
    showOptions: {
      description:
        "When `true`, the options list is displayed automatically. This is useful when the dropdown should always be visible.",
      type: "boolean",
    },
    picker: {
      description:
        "If `true`, the Select component allows for multiple selections, with the selected items displayed as a list.",
      type: "boolean",
    },
  },
};

export { select };
