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
    required: true,
    maxLength: 220,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
  },
  propTypes: {
    label: {
      description:
        "The `label` prop defines the textual prompt that informs the user of the expected input in the textarea. It provides clarity and guidance on what the user should type in, and is commonly placed above the textarea. Associating this label with the textarea improves the accessibility of the form by providing an explicit label for screen readers. The label is important for usability, especially in forms with multiple fields.",
      type: "string",
    },

    name: {
      description:
        "The `name` prop specifies the name of the textarea field. It is used during form submission to identify the field and its value, making it essential for processing form data. This attribute ensures the textarea's value is correctly sent to the server when the form is submitted. It also helps differentiate between multiple textareas in a form, ensuring proper backend data handling.",
      type: "string",
    },

    id: {
      description:
        "The `id` prop provides a unique identifier for the textarea element. It is crucial for accessibility, allowing the `label` element to be linked to the textarea via the `htmlFor` attribute. The `id` is also useful for referencing the textarea in JavaScript, CSS, or automated testing, ensuring the component can be targeted programmatically. This prop is required to ensure a unique reference for the component.",
      type: "string",
    },

    placeholder: {
      description:
        "The `placeholder` prop defines a short hint displayed in the textarea when it is empty. This hint gives users an example or a suggestion of what they should input, providing contextual information to guide them. The placeholder text disappears once the user starts typing. It is particularly useful for showing sample content or instructions without using extra UI elements.",
      type: "string",
    },

    disabled: {
      description:
        "The `disabled` prop determines whether the textarea is interactive or not. When set to `true`, the textarea is visually grayed out and cannot receive focus, preventing the user from typing or editing its content. This is useful for cases where input is temporarily unavailable or restricted, but still visible for informational purposes.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    focused: {
      description:
        "The `focused` prop indicates whether the textarea should be programmatically focused. When set to `true`, the textarea automatically gains focus when it is rendered. This is helpful in scenarios where focus needs to be directed to the textarea for usability purposes, such as when guiding users through forms or emphasizing specific inputs.",
      type: "boolean",
    },

    status: {
      description:
        "The `status` prop defines the visual validation state of the textarea. It can be used to indicate whether the input is valid or requires correction. The status can trigger different visual cues such as color changes or icons to inform users of the state. Common use cases include marking inputs as `pending`, `invalid`, or `valid`, depending on validation logic.",
      type: "ITextareaStatus",
      options: ["invalid", "pending"],
      table: {
        defaultValue: { summary: "pending" },
      },
    },

    value: {
      description:
        "The `value` prop sets the controlled content of the textarea. This is useful when you need to display pre-existing content or when the textarea is used in a controlled component pattern, where its value is managed by React state. The `value` prop allows developers to bind the input to a data model and keep it synchronized with the user’s actions.",
      type: "string",
    },

    onChange: {
      description:
        "The `onChange` prop is an event handler that triggers when the user modifies the content of the textarea. It receives the event object, which provides details about the input change. This function allows developers to capture user input in real time, update the application state, and perform validation or other actions based on the new input.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },

    maxLength: {
      description:
        "The `maxLength` prop defines the maximum number of characters the user can enter into the textarea. This is useful for limiting the input length for fields like comments, feedback, or restricted data fields. When the character limit is reached, the textarea prevents further input and can display a visual indicator to inform the user of the remaining character allowance.",
      type: "number",
    },

    minLength: {
      description:
        "The `minLength` prop specifies the minimum number of characters the user must input into the textarea for it to be considered valid. This is useful for ensuring a certain amount of information is provided, such as a minimum word count for feedback or form submissions. If the input is shorter than the defined `minLength`, the field can be marked as invalid.",
      type: "number",
    },

    required: {
      description:
        "The `required` prop marks the textarea as a mandatory field. When set to `true`, the form will not submit unless the user provides a value for the textarea. This prop is particularly useful for important fields that must be completed, such as contact details, descriptions, or feedback. The browser automatically enforces this requirement, often providing visual cues and preventing form submission until the requirement is met.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    message: {
      description:
        "The `message` prop is used to display a supplemental message below the textarea, which can be a validation error or an instruction. This message helps guide the user by providing feedback, such as when their input is incorrect or additional information is required. For instance, if the field is invalid, the message can explain why and suggest how to fix the input.",
      type: "string",
    },

    fullwidth: {
      description:
        "The `fullwidth` prop allows the textarea to expand and take up the full width of its parent container. This is useful in responsive designs or when the input needs to be aligned with other elements that take up full width. By default, the textarea's size is determined by its content, but setting `fullwidth` ensures it stretches across the available horizontal space.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    onFocus: {
      description:
        "The `onFocus` prop is an event handler that triggers when the textarea receives focus. This function allows developers to execute custom logic when the user clicks into or tabs to the textarea, such as highlighting the field, changing its border color, or displaying additional information. The event object passed to this handler contains details about the focus event.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },

    onBlur: {
      description:
        "The `onBlur` prop is an event handler that triggers when the textarea loses focus. This can happen when the user clicks or tabs away from the textarea. The `onBlur` event is useful for validating input after the user finishes typing or for resetting the visual state of the textarea when it is no longer active. The event object passed to this handler contains details about the blur event.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { textarea };
