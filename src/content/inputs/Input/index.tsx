import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Input, InputTokens } from "@inubekit/input";

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

const input = {
  description:
    "The Input component is a versatile form element that allows users to input and edit text, numbers, or other types of data. It supports various input types such as text, email, number, phone, and search, making it adaptable for different use cases. The component can be enhanced with additional features such as labels, icons (before and after the input), placeholder text, and validation messages. It also supports customization options like full width display, character limits, and required fields, providing both visual and functional feedback for a better user experience.",
  example: Input,
  name: "Input",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/input-6glnrf?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Input"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
    disabled: {
      description:
        "The `disabled` prop determines whether the input field is interactive. When set to `true`, the input becomes non-editable and visually appears dimmed or grayed out, signaling to the user that it is not active or available for input. This is useful for disabling form fields until certain conditions are met, such as disabling a submit button until all required inputs are filled.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    focused: {
      description:
        "The `focused` prop controls whether the input field is automatically focused when rendered. When `true`, the field gains focus immediately, making it ready for the user to type. This is helpful in forms where the input field needs to be pre-selected to improve user experience, such as in a search bar that users are expected to type into immediately.",
      type: "boolean",
    },

    fullwidth: {
      description:
        "The `fullwidth` prop allows the input field to stretch to the full width of its parent container. This is useful in layouts where the input needs to be responsive or match the size of other form elements. By default, input fields adjust to their content size, but setting this prop to `true` ensures the field spans across its container's width.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    iconAfter: {
      description:
        "The `iconAfter` prop allows you to render an icon component after the input text. This is typically used for enhancing the visual representation of the input field, providing context to the input's purpose (e.g., a search icon after a search input). Pass an icon component (e.g., from react-icons) as the value.",
      type: "React.ReactNode",
    },

    iconBefore: {
      description:
        "The `iconBefore` prop allows you to render an icon component before the input text. This helps provide a visual cue to the user about the expected input or to enhance the UI design. For instance, a phone icon can precede a phone number input field to make it clearer.",
      type: "React.ReactNode",
    },

    id: {
      description:
        "The `id` prop provides a unique identifier for the input field. It is essential for accessibility, allowing labels to be associated with their corresponding input fields via the `htmlFor` attribute. This prop also makes the input field easier to reference in JavaScript and CSS, or for testing purposes.",
      type: "string",
    },

    inputMode: {
      description:
        "The `inputMode` prop is used to specify the type of data that the user is expected to enter, which hints the type of keyboard or input method to be displayed on mobile devices. For example, setting `inputMode` to `numeric` will show a numeric keyboard on touch devices, improving user experience.",
      type: "string",
    },

    label: {
      description:
        "The `label` prop defines a text label for the input, providing clarity on what kind of input the user should enter. It helps enhance accessibility and user experience by guiding the user about the expected data, especially in forms with multiple input fields.",
      type: "string",
    },

    message: {
      description:
        "The `message` prop allows you to display an additional message below the input field. This can be used for providing validation feedback, additional instructions, or error messages, making it clear to users if the data they've entered is correct or needs to be adjusted.",
      type: "string",
    },

    name: {
      description:
        "The `name` prop is used to identify the input field during form submission. It is essential for grouping form fields in the backend and ensuring the correct data is passed when the form is submitted. This prop differentiates various input fields when the form is processed.",
      type: "string",
    },

    onBlur: {
      description:
        "The `onBlur` prop is an event handler that triggers when the input field loses focus. This is useful for validating the input after the user moves on to the next field or for resetting visual styles when the input is no longer active. The event object provides access to details about the blur event.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },

    onChange: {
      description:
        "The `onChange` prop is an event handler that is triggered whenever the user modifies the content of the input. It captures the event object and allows developers to update the component's state or perform validation based on the user's input in real time.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },

    onFocus: {
      description:
        "The `onFocus` prop is an event handler that is triggered when the input field gains focus. This is often used to apply visual styles when the input becomes active or to trigger custom logic such as showing a tooltip. The event object provides details about the focus event.",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
    },

    onKeyUp: {
      description:
        "The `onKeyUp` prop is an event handler that is triggered when the user releases a key while the input is in focus. This allows developers to capture keystrokes and handle real-time actions, such as submitting a form when the Enter key is released or providing dynamic feedback based on user input.",
      type: "(event: React.KeyboardEvent<HTMLInputElement>) => void",
    },

    placeholder: {
      description:
        "The `placeholder` prop specifies the text that appears inside the input field when it is empty. It provides a hint or example to the user about what kind of data to input. The placeholder disappears once the user starts typing.",
      type: "string",
    },

    required: {
      description:
        "The `required` prop specifies whether the input field is mandatory. If `true`, the form cannot be submitted unless the field contains a value. This prop helps enforce the completion of important fields and provides visual cues to the user about which fields are required.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    size: {
      description:
        "The `size` prop adjusts the size of the input field, affecting its overall height and padding. It can be used to change the input's size based on the form layout, ensuring it fits well with other elements on the page.",
      type: "IInputSize",
    },

    status: {
      description:
        "The `status` prop defines the validation state of the input, such as `invalid` or `valid`. This affects the visual styling of the input field, helping users understand whether their input is correct or requires attention.",
      type: "IInputStatus",
    },

    type: {
      description:
        "The `type` prop determines the type of input field to render. It specifies what kind of data the input field is expected to handle, such as 'text', 'email', 'number', 'search', etc. Each type provides specific behaviors and validations according to the expected input.",
      type: "IInputInputType",
    },

    value: {
      description:
        "The `value` prop specifies the current value of the input field. This is particularly useful in controlled components, where the input field's value is managed by the React component's state. It allows developers to display initial values or control the input programmatically.",
      type: "string | number",
    },

    readOnly: {
      description:
        "The `readOnly` prop makes the input field non-editable, but still allows users to interact with it, such as selecting the text. This is useful when you want to display data in an input format, but prevent modifications.",
      type: "boolean",
    },

    maxLength: {
      description:
        "The `maxLength` prop defines the maximum number of characters the user can enter into the input field. It prevents users from typing more than the specified number of characters, which is useful for fields like usernames, comments, or other restricted inputs.",
      type: "number",
    },

    minLength: {
      description:
        "The `minLength` prop defines the minimum number of characters required for the input to be considered valid. If the user enters fewer characters than the specified minimum, the input can trigger validation errors.",
      type: "number",
    },

    counter: {
      description:
        "The `counter` prop determines whether to display a character count near the input field. It helps users keep track of how many characters they have entered compared to the maximum limit, ensuring they stay within the allowed range.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { input };
