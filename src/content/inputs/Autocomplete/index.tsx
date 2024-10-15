import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";
import { Autocomplete } from "@inubekit/autocomplete";
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

const autocomplete = {
  description:
    "The Autocomplete component allows users to select or input a autocomplete, providing a user-friendly interface for autocomplete selection.",
  example: Autocomplete,
  name: "Autocomplete",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/tzmlwl?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Autocomplete"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    label: "Autocomplete",
    name: "Autocomplete",
    id: "Autocomplete",
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
        "A text label that guides the user on what value to input. The label is typically placed near the input field to provide context.",
      type: "string",
    },
    name: {
      description:
        "The name attribute for the autocomplete input field, used to identify the field during form submissions.",
      type: "string",
    },
    id: {
      description:
        "A unique identifier for the Autocomplete component, allowing the label to be associated with the input field using the `htmlFor` attribute.",
      type: "string",
      required: true,
    },
    disabled: {
      description:
        "If `true`, the autocomplete input is disabled, preventing user interactions and visually indicating its unavailability.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "The current value of the autocomplete input. This can be a string representing the user's input or the selected suggestion.",
      type: "string",
    },
    onChange: {
      description:
        "A function that is triggered whenever the user changes the value of the autocomplete input. The function receives the `name` and `value` parameters to manage the new selection or input.",
      type: "(name: string, value: string) => void",
    },
    required: {
      description:
        "If `true`, the field is marked as required, meaning the user must fill it before submitting the form.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      description: (
        <>
          <Text appearance="gray" size="medium">
            Controls the size of the Autocomplete component. Available options
            include:
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
      type: "IAutocompleteSize",
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
    placeholder: {
      description:
        "Text displayed in the input field when no value is provided, guiding the user to start typing and filter options.",
      type: "string",
    },
    options: {
      description:
        "An array of objects representing the available options for the autocomplete dropdown. Each object should have properties like 'id', 'label', and 'value'.",
      type: "array",
    },
    onFocus: {
      description:
        "A function that is triggered when the input field gains focus, such as when the user clicks inside the field or navigates to it with the keyboard.",
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

export { autocomplete };
