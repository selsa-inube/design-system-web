import { InformationsProps } from "../../../../components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "label",
    description: "prompts the user what value to enter",
    type: "string",
  },
  {
    nameProps: "name",
    description: "name of the input element",
    type: "string",
  },
  {
    nameProps: "id",
    description:
      "Uniquely identifies the Textfield Component, it will also allow the label element to be connected to the input element through the htmlFor of the label",
    type: "string",
  },
  {
    nameProps: "placeholder",
    description: "Text to display in the text field whenever it is empty",
    type: "string",
  },
  {
    nameProps: "required",
    description: "Defines if the field is required or not",
    type: "boolean",
  },
  {
    nameProps: "disabled",
    description:
      "Sets the field as to appear disabled, users will not be able to interact with the text field",
    type: "boolean",
  },
  {
    nameProps: "readOnly",
    description: "Specifies whether a text field should be read-only",
    type: "boolean",
  },
  {
    nameProps: "options",
    description:
      "(array): Shall be designed to accept an array of objects with a predetermined structure.",
    type: "[{id: string, label: string, disabled: boolean}]",
  },
  {
    nameProps: "size",
    description: "Defines the size of the componentonly",
    type: "string: 'wide' | 'compact'",
  },
  {
    nameProps: "fullwidth",
    description: "Option to fit field width to its parent widthonly",
    type: "boolean",
  },
  {
    nameProps: "status",
    description: "Status of the component",
    type: "string: 'pending' | 'valid' | 'invalid'",
  },
  {
    nameProps: "message",
    description:
      "Isplay a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
    type: "string",
  },
  {
    nameProps: "onChange",
    description:
      "allows you to control what to do when the user changes the value of the component",
    type: "function: (event: React.ChangeEvent<HTMLInputElement>) => void;",
  },
  {
    nameProps: "onClick",
    description:
      "allows you to control what to do when the user changes the value of the component",
    type: "function: (event: React.ChangeEvent<HTMLInputElement>) => void;",
  },
  {
    nameProps: "onFocus",
    description:
      "allows you to control what to do when the onfocus event occurs",
    type: "function: (event: FocusEvent) => void;",
  },
  {
    nameProps: "onBlur",
    description:
      "allows you to control what to do when the onblur event occurs",
    type: "function: (event: FocusEvent) => void;",
  },
];
