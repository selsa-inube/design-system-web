import { Icon, IconTokens } from "@inubekit/icon";
import { MdAdd } from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const iconTokensConfig = {
  businessUnit: "inube",
  component: "icon",
  block: "background",
  element: "color",
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

const icon = {
  description:
    "Icons are used to graphically represent actions, decisions, or statuses in the user interface. This component provides customizable options for icon appearance, size, shape, and behavior.",
  example: Icon,
  name: "Icon",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/pqwn7m?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Icon"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    appearance: "primary",
    icon: MdAdd,
    cursorHover: false,
    parentHover: false,
    disabled: false,
    spacing: "wide",
    variant: "none",
    shape: "rectangle",
    size: "24px",
    onClick: () => {},
  },
  propTypes: {
    appearance: {
      description:
        "Determines the color scheme and overall style of the icon. Choose from predefined themes such as 'primary', 'success', 'warning', 'danger', 'help', 'dark', 'gray', and 'light'.",
      type: "IIconAppearance",
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
    cursorHover: {
      description:
        "Specifies whether the icon's appearance changes when the cursor hovers over it, indicating interactivity.",
    },
    parentHover: {
      description:
        "Determines if the icon's appearance changes when its parent element is hovered over, often used to enhance user experience.",
    },
    icon: {
      description:
        "The graphical element displayed within the Icon component. Typically an SVG or a React icon component like those from 'react-icons'.",
    },
    disabled: {
      description:
        "Indicates whether the icon is in a disabled state, preventing interaction and applying a dimmed visual style.",
    },
    spacing: {
      description:
        "Controls the padding around the icon. Options include 'none', 'compact', and 'wide' to adjust spacing according to design needs.",
      type: "IIconSpacing",
      options: [
        { id: "none", label: "None" },
        { id: "compact", label: "Compact" },
        { id: "wide", label: "Wide" },
      ],
    },
    variant: {
      description:
        "Defines the style of the icon. 'Filled' provides a solid background, 'outlined' has a border without a background, and 'none' is minimalistic with no additional styling.",
      type: "IIconVariant",
      options: [
        { id: "none", label: "None" },
        { id: "outlined", label: "Outlined" },
        { id: "filled", label: "Filled" },
      ],
    },
    shape: {
      description:
        "Sets the shape of the icon, which can be 'circle' or 'rectangle'. This affects the icon's border-radius and overall silhouette.",
      type: "IIconShape",
      options: [
        { id: "circle", label: "Circle" },
        { id: "rectangle", label: "Rectangle" },
      ],
    },
    onClick: {
      description:
        "A function that is called when the icon is clicked. Useful for triggering actions or events.",
    },
    size: {
      description:
        "Specifies the size of the icon in pixels. This can be a number or a string representing the size in pixels, such as '24px'.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(IconTokens, iconTokensConfig),
};

export { icon };
