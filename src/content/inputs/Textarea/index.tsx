import { TextareaController } from "./Controller/Textarea.Controller";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";

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

const textarea = {
  description:
    "The Textarea component is a multi-line text input field that allows users to enter longer text content. It includes various features like placeholder text, character limits, and validation states, making it suitable for form submissions, user feedback, and other textual input needs.",
  example: TextareaController,
  name: "Textarea",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/lq5g3m?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Textarea"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    label: "Textarea",
    name: "textarea",
    id: "textarea",
    status: "pending",
    placeholder: "Storybook Textarea",
    disabled: false,
    fullwidth: false,
    lengthThreshold: 20,
    required: true,
    maxLength: 220,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
  },
  propTypes: {
    label: {
      description:
        "A label that describes the purpose of the textarea, guiding users on what information to provide.",
      type: "string",
    },
    name: {
      description:
        "The name attribute for the textarea, used to identify the form control in form submissions.",
      type: "string",
    },
    id: {
      description:
        "A unique identifier for the textarea component, used for accessibility and to associate the label with the textarea.",
      type: "string",
    },
    placeholder: {
      description:
        "Text displayed inside the textarea when it is empty, providing a hint or example of what to enter.",
      type: "string",
    },
    disabled: {
      description:
        "If true, the textarea is non-interactive and visually indicates that the field is not available for input.",
      type: "boolean",
    },
    value: {
      description:
        "The initial content of the textarea, often used to display existing data or default text.",
      type: "string",
    },
    onChange: {
      description:
        "Event handler function that is called whenever the user changes the text in the textarea.",
      type: "function",
    },
    maxLength: {
      description:
        "Specifies the maximum number of characters allowed in the textarea, preventing users from entering more.",
      type: "number",
    },
    required: {
      description:
        "Indicates whether the textarea is a mandatory field in the form.",
      type: "boolean",
    },
    status: {
      description:
        "Visual indication of the validation state of the textarea, such as 'invalid' or 'pending'.",
      type: "ITextareaStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    message: {
      description:
        "A message displayed below the textarea, which can be used for validation feedback or additional instructions.",
      type: "string",
    },
    fullwidth: {
      description:
        "If true, the textarea expands to the full width of its parent container.",
      type: "boolean",
    },
    lengthThreshold: {
      description:
        "Specifies the number of characters at which to start displaying a character count or warning.",
      type: "number",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { textarea };
