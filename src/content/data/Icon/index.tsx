import { Icon } from "@inubekit/icon";
import { MdAdd } from "react-icons/md";
import { inube } from "@inubekit/foundations";
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
  description: "Icons used to communicate actions and decisions graphically",
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
      title="Avatar"
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
      description: "The base styling to apply to the icon",
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
      description: "Whether the icon changes upon cursor hover",
    },
    parentHover: {
      description: "Whether the icon changes upon its parent hover",
    },
    icon: {
      description: "Icon to be displayed inside the Icon component",
    },
    disabled: {
      description: "Set if the icon is disabled",
    },
    spacing: {
      description: "Spacing around the icon",
      type: "IIconSpacing",
      options: [
        { id: "none", label: "None" },
        { id: "compact", label: "Compact" },
        { id: "wide", label: "Wide" },
      ],
    },
    variant: {
      description: "Variant of the icon",
      type: "IIconVariant",
      options: [
        { id: "none", label: "None" },
        { id: "outlined", label: "Compact" },
        { id: "filled", label: "Filled" },
      ],
    },
    shape: {
      description: "Shape of the icon",
      type: "IIconShape",
      options: [
        { id: "circle", label: "Circle" },
        { id: "rectangle", label: "Rectangle" },
      ],
    },
    onClick: {
      description: "Function to handle icon click",
    },
    size: {
      description: "Size of the icon in pixels",
      type: "input",
    },
  },
  tokens: buildTokenDescriptions(inube.icon, iconTokensConfig),
};

export { icon };
