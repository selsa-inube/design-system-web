import { Textarea } from "@inube/design-system";

const textarea = {
  description: "This component uses a filled primary icon for all applications",
  example: Textarea,
  name: "Textarea",
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
      description: "prompts the user what value to enter",
    },
    name: {
      description: "name of the Textarea element",
    },
    id: {
      description:
        "uniquely identifies the **Textarea Component**, it will also allow the **label element** to be connected to the **Textarea element** through the htmlFor of the label",
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
    maxLength: {
      description:
        "defines how many characters maximum are received in the component value",
    },
    required: {
      description: "defines if the field is required or not",
    },
    status: {
      description: "status of the component",
      type: "ITextareaStatus",
      options: [
        { id: "invalid", label: "Invalid" },
        { id: "pending", label: "Pending" },
      ],
    },
    message: {
      description:
        "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
    },
    fullwidth: {
      description: "option to fit field width to its parent width",
    },
    lengthThreshold: {
      description:
        "defines the minimum number of characters for displaying counter alerts",
    },
  },
};

export { textarea };
