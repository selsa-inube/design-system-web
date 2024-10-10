import { MdAdd } from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { ButtonController } from "./Controller/Button.Controller";
import { ButtonTokens } from "@inubekit/button";

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
  description:
    "The Button component is a versatile UI element used to trigger actions or navigate users to different sections within an application. It supports various appearances, types, and additional elements like icons to enhance user interaction.",
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
      title="Button"
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
      description:
        "Determines whether the button is interactive or not. When set to true, the button becomes non-interactive, preventing user actions such as clicks. This prop also visually indicates the disabled state, often by dimming the button's appearance and changing the cursor to indicate that the button is inactive. This is useful for situations where an action is unavailable or requires conditions to be met before becoming enabled",
    },
    iconBefore: {
      description:
        "Specifies the icon to be rendered before the button's text. Pass the icon component through props using the iconBefore prop, typically using icons from the react-icons/md library (e.g., <MdIconName />)",
    },
    iconAfter: {
      description:
        "Specifies the icon to be rendered after the button's text. Pass the icon component through props using the iconAfter prop, similar to iconBefore, utilizing icons from the react-icons/md library",
      type: "ReactElement",
    },
    type: {
      description:
        "Specifies the button's functionality and interaction behavior. Options include 'button' for a standard clickable button, 'submit' for submitting form data, 'reset' for resetting form inputs to their initial values, and 'link' for navigation buttons that act as hyperlinks. The type prop helps define the intended action and usage context for the button",
      type: "IButtonType",
      options: [
        { id: "button", label: "Button" },
        { id: "submit", label: "Submit" },
        { id: "reset", label: "Reset" },
        { id: "link", label: "Link" },
      ],
    },
    spacing: {
      description:
        " Defines the spacing between elements within the button. The spacing options, such as 'wide' or 'compact', adjust the padding and overall button size, with 'wide' providing more padding and a larger button height compared to 'compact'",
      type: "IButtonSpacing",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    variant: {
      description:
        "Determines the button's styling and interaction type. Options include 'filled,' which features a solid background color with a visible border, providing a prominent appearance; 'outlined,' which has a transparent background with a visible border, offering a subtle emphasis; and 'none,' which lacks both background and border",
      type: "IButtonVariant",
      options: [
        { id: "filled", label: "Filled" },
        { id: "outlined", label: "Outlined" },
        { id: "none", label: "None" },
      ],
    },
    fullwidth: {
      description:
        "By default, the button's width adjusts to fit its content. Setting fullwidth={true} makes the button expand to fill the width of its parent container, making it useful for creating buttons that span the entire width of a form or section",
    },
    onClick: {
      description: "function to control button click",
    },
    path: {
      description:
        "Used when the button is intended to navigate to a different route or page. The path prop provides the destination URL, making it useful for navigation buttons that act as links within the application",
    },
    cursorHover: {
      description:
        "Controls the cursor appearance when hovering over the button. When cursorHover is set to true, the cursor changes to a pointer, indicating that the button is interactive. If false, the cursor may remain as the default arrow, indicating a non-interactive state",
    },
    parentHover: {
      description:
        "Indicates whether the button's appearance should change based on its parent's hover state. If parentHover is true, the button will visually respond to the parent's hover state, providing a consistent user experience in group interactions. If false, the button will not react to the parent's hover state",
    },
  },
  tokens: buildTokenDescriptions(ButtonTokens, buttonTokensConfig),
};

export { button };
