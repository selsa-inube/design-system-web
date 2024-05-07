import { Button } from "@inube/design-system";
import { MdAdd } from "react-icons/md";

const button = {
  description: "This component uses a filled primary icon for all applications",
  example: Button,
  name: "Button",
  props: {
    children: "Button",
    appearance: "primary",
    path: "/privilege",
    iconBefore: MdAdd,
    loading: false,
    disabled: false,
    type: "button",
    spacing: "wide",
    variant: "filled",
    fullwidth: false,
    onClick: () => console.log("clicked from Default-story"),
    cursorHover: false,
    parentHover: false,
  },
  propTypes: {
    children: {
      description: "the text to be displayed",
    },
    loading: {
      description: "conditionally show a spinner over the top of a button",
    },
    appearance: {
      description: "the base styling to apply to the button",
      type: "IButtonAppearance",
      options: [
        { id: "primary", label: "Primary" },
        { id: "success", label: "Success" },
        { id: "warning", label: "Warning" },
        { id: "danger", label: "Danger" },
        { id: "help", label: "Help" },
        { id: "dark", label: "Dark" },
        { id: "gray", label: "Gray" },
        { id: "light", label: "Light" },
      ],
    },
    disabled: {
      description: "set if the button is disabled",
    },
    iconBefore: {
      description: "places an icon within the button, before the button's text",
    },
    iconAfter: {
      description: "places an icon within the button, after the button's text",
    },
    type: {
      description: "pass type down to a button",
      type: "IButtonType",
      options: [
        { id: "button", label: "Button" },
        { id: "submit", label: "Submit" },
        { id: "reset", label: "Reset" },
        { id: "link", label: "Link" },
      ],
    },
    spacing: {
      description: "pass type down to a button",
      type: "IButtonSpacing",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    variant: {
      description: "pass type down to a button",
      type: "IButtonVariant",
      options: [
        { id: "filled", label: "Filled" },
        { id: "outlined", label: "Outlined" },
        { id: "none", label: "None" },
      ],
    },
    fullwidth: {
      description: "option to fit button width to its parent width",
    },
    onClick: {
      description: "function to control button click",
    },
    path: {
      description:
        "Is the path where the button is going to navigate when is used as button for navigation",
    },
    cursorHover: {
      description: "whether the button changes upon cursor hover",
    },
    parentHover: {
      description: "whether the button changes upon its parent hover",
    },
  },
};

export { button };
