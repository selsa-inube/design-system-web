import { MdAdd } from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { ButtonController } from "./Controller/Button.Controller";

const buttonTokensConfig = {
  businessUnit: "inube",
  component: "button",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "block", order: 4 },
    { id: "element", order: 5 },
    { id: "modifier", order: 6 },
    { id: "token", order: 7 },
  ],
};

const button = {
  description: "This component uses a filled primary icon for all applications",
  example: ButtonController,
  name: "Button",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/npz2p3?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Avatar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
      type: "input",
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
      type: "ReactElement",
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
  tokens: buildTokenDescriptions(inube.button, buttonTokensConfig),
};

export { button };
