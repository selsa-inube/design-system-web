import { Icon, IconTokens } from "@inubekit/icon";
import { MdAdd } from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Text } from "@inubekit/text";

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
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the overall style and color theme of the icon. The appearance prop modifies the color scheme of the icon to match common design themes. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Standard color scheme for general
              actions.
            </li>
            <li>
              <strong>Success</strong>: Indicates successful operations, often
              used for confirmation actions.
            </li>
            <li>
              <strong>Warning</strong>: Represents caution or potential issues,
              usually to grab the user's attention.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical actions, commonly
              associated with deletions or errors.
            </li>
            <li>
              <strong>Help</strong>: Provides assistance or additional
              information to the user.
            </li>
            <li>
              <strong>Dark</strong>: A darker, neutral color scheme for more
              subdued elements or actions.
            </li>
            <li>
              <strong>Gray</strong>: Used for secondary or inactive elements,
              implying lower importance.
            </li>
            <li>
              <strong>Light</strong>: For lighter, less prominent icons, often
              used in background elements.
            </li>
          </ul>
        </>
      ),
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
        "Determines if the icon visually changes when the user hovers the cursor over it, indicating interactivity. This prop is useful for improving user experience by making it clear which elements are actionable.",
      type: "boolean",
      defaultValue: false,
      options: [true, false],
    },

    parentHover: {
      description:
        "Indicates whether the icon changes appearance when its parent element is hovered over. This is often used in scenarios where the icon is part of a larger clickable region or when hover effects should extend beyond the icon itself.",
      type: "boolean",
      defaultValue: false,
      options: [true, false],
    },

    icon: {
      description:
        "The graphical element to be displayed within the Icon component. This is typically an SVG icon or a React component imported from libraries such as 'react-icons'. It visually represents the action or state associated with the icon.",
      type: "React.ReactNode",
    },

    disabled: {
      description:
        "Marks the icon as non-interactive by applying a 'disabled' state. In this state, the icon is visually dimmed and user interactions such as clicking are prevented.",
      type: "boolean",
      defaultValue: false,
      options: [true, false],
    },

    spacing: {
      description:
        "Controls the amount of padding around the icon, allowing you to adjust the space between the icon and surrounding elements. This is useful for aligning the icon within button groups or ensuring consistent spacing across different layouts.",
      type: "IIconSpacing",
      options: [
        {
          id: "narrow",
          label: "Narrow - Minimal padding, used when space is limited",
        },
        {
          id: "compact",
          label: "Compact - Provides a moderate amount of padding",
        },
        {
          id: "wide",
          label: "Wide - Maximum padding, ideal for standalone icons",
        },
      ],
    },

    variant: {
      description:
        "Specifies the visual style of the icon, with options to modify its background or outline. 'Filled' gives the icon a solid background color, 'outlined' applies a border without a background, and 'none' applies no additional styling beyond the icon's inherent shape.",
      type: "IIconVariant",
      options: [
        { id: "filled", label: "Filled - Solid background for emphasis" },
        {
          id: "outlined",
          label: "Outlined - Border around the icon for subtle emphasis",
        },
        {
          id: "none",
          label: "None - No background or border, displaying the icon as-is",
        },
      ],
    },

    shape: {
      description:
        "Defines the shape of the icon container. The shape can be set to either 'circle' or 'rectangle', affecting the icon's overall look. A circular icon is often used for profile pictures or actions that need emphasis, while a rectangular icon is used for standard buttons or tooltips.",
      type: "IIconShape",
      options: [
        { id: "circle", label: "Circle - Rounded, commonly used for emphasis" },
        {
          id: "rectangle",
          label:
            "Rectangle - Standard shape, suitable for buttons or inline elements",
        },
      ],
    },

    onClick: {
      description:
        "Callback function triggered when the icon is clicked. This is useful for handling user interactions, such as opening modals, navigating, or performing specific actions when the icon is clicked.",
      type: "(e: React.MouseEvent) => void",
    },

    size: {
      description:
        "Specifies the size of the icon. This prop accepts a string value (typically in pixels) or a number. Adjust the size to match the surrounding elements or to make the icon more prominent.",
      type: "string",
      defaultValue: "24px",
    },
  },
  tokens: buildTokenDescriptions(IconTokens, iconTokensConfig),
};

export { icon };
