import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";
import { Date } from "@inubekit/date";
import { Text } from "@inubekit/text";

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

const date = {
  description:
    "The Date component allows users to select or input a date, providing a user-friendly interface for date selection.",
  example: Date,
  name: "Date",
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
      title="Date"
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
        "A text label that guides the user on what value to input. The label is typically placed near the date input field to give context.",
      type: "string",
    },
    name: {
      description:
        "The name attribute for the date input field. It is used to identify the field during form submissions.",
      type: "string",
    },
    id: {
      description:
        "A unique identifier for the Date component, allowing the label to be associated with the input field using the `htmlFor` attribute.",
      type: "string",
      required: true,
    },
    disabled: {
      description:
        "If `true`, the date input is disabled, preventing user interactions and indicating its unavailability. It also visually dims the field.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "The current value of the date input. This can be a string or number representing the date. Useful in controlled components where the value is managed externally.",
      type: "string | number",
    },
    onChange: {
      description:
        "A function that is triggered whenever the user changes the value of the date input. The function receives the change event as an argument, allowing you to manage the component's state or perform actions based on the new value.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
    required: {
      description:
        "If `true`, the field is marked as required, meaning the user must fill it before submitting the form. This also visually indicates the field is mandatory.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    status: {
      description: (
        <>
          <Text appearance="gray" size="medium">
            Defines the validation status of the Date input field. Available
            options include:
          </Text>
          <ul>
            <li>
              <strong>Invalid</strong>: The input value is incorrect or fails
              validation, and an error message is displayed.
            </li>
            <li>
              <strong>Pending</strong>: The validation is in progress or the
              field has not been validated yet.
            </li>
          </ul>
        </>
      ),
      type: "IDateStatus",
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
        "A message displayed below the input field. This message can serve as an error notification or as additional instructions to the user.",
      type: "string",
    },
    size: {
      description: (
        <>
          <Text appearance="gray" size="medium">
            Controls the size of the Date component. Available options include:
          </Text>
          <ul>
            <li>
              <strong>Wide</strong>: A standard size for the input field,
              providing a larger, more visible layout.
            </li>
            <li>
              <strong>Compact</strong>: A smaller version of the input, suitable
              for tighter layouts or less prominent areas of the form.
            </li>
          </ul>
        </>
      ),
      type: "IDateSize",
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
        "If `true`, the input field will stretch to fill the entire width of its container, making it suitable for responsive or full-width layouts.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    onFocus: {
      description:
        "A function that is triggered when the input field gains focus, such as when the user clicks inside the field or uses the Tab key to navigate to it.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
    onBlur: {
      description:
        "A function that is triggered when the input field loses focus, such as when the user clicks outside the field or navigates away using the keyboard.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { date };
