export const parameters = [
  {
    nameProps: "id",
    description:
      "uniquely identifies the Textfield Component, it will also allow the label element to be connected to the Textarea element through the htmlFor of the label",
    type: "string",
  },
  {
    nameProps: "label",
    description: "Prompts the user what value to enter",
    type: "boolean",
  },
  {
    nameProps: "name",
    description: "name of the Textfield element",
    type: "string",
  },
  {
    nameProps: "value",
    description: "component initial value",
    type: "string",
  },

  {
    nameProps: "status",
    description: "status of the component",
    type: "string: 'pending' | 'valid' | 'invalid'",
  },
  {
    nameProps: "placeholder",
    description: "Text to display in the text field whenever it is empty",
    type: "string",
  },
  {
    nameProps: "disabled",
    description: "Indicates wheter the switch is in its disabled state",
    type: "boolean",
  },
  {
    nameProps: "placeholder",
    description: "Text to display in the text field whenever it is empty",
    type: "string",
  },
  {
    nameProps: "fullwidth",
    description: "Option to fit field width to its parent width",
    type: "boolean",
  },
  {
    nameProps: "lengthThreshold",
    description:
      "Defines the minimum number of characters for displaying counter alerts",
    type: "number",
  },
  {
    nameProps: "required",
    description: "Defines if the field is required or not",
    type: "boolean",
  },
  {
    nameProps: "maxLength",
    description:
      "defines how many characters maximum are received in the component value",
    type: "number",
  },
  {
    nameProps: "message",
    description:
      "Isplay a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
    type: "string",
  },
  {
    nameProps: "readOnly",
    description: "Specifies whether a text field should be read-only",
    type: "boolean",
  },
  {
    nameProps: "onChange",
    description:
      "allows you to control what to do when the user changes the value of the component",
    type: "function: (event: React.ChangeEvent<HTMLInputElement>) => void;",
  },
];
