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
        "Determines whether the icon changes visually when the cursor hovers directly over it. This indicates interactivity and enhances user experience by making it clear that the element is actionable. When set to `true`, the icon visually responds to the cursor hover, typically by changing color or applying a hover effect. When `false`, the icon remains static.",
      type: "boolean",
      defaultValue: false,
      options: [true, false],
    },

    parentHover: {
      description:
        "Indicates whether the icon changes its appearance when the parent element is hovered over. This prop is useful for scenarios where the icon is part of a larger clickable area or the hover effect is triggered by the parent, not the icon itself. When set to `true`, the icon will visually change as if it is being hovered, even though the hover is on the parent. This controlled behavior can be combined with `cursorHover` for nuanced hover interactions.",
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
        "Controls the padding around the icon, adjusting the space between the icon and surrounding elements. This helps in aligning the icon within button groups or ensuring consistent layout spacing. Available options include:\n- **Narrow**: Minimal padding for compact layouts.\n- **Compact**: Moderate padding for balanced spacing.\n- **Wide**: Maximum padding, typically used for standalone icons.",
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
        "Defines the visual style of the icon by modifying its background or outline. The available styles include:\n- **Filled**: Solid background for emphasis.\n- **Outlined**: Only a border is applied without a background, offering subtle emphasis.\n- **None**: No additional styling is applied beyond the icon's inherent shape.",
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
        "Defines the shape of the icon's container. The shape can either be:\n- **Circle**: A rounded shape, often used for emphasis.\n- **Rectangle**: A standard shape, suitable for buttons or inline elements.",
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
        "Callback function triggered when the icon is clicked. This allows the icon to be interactive, often used for actions such as opening modals, navigating to new views, or performing specific tasks when clicked.",
      type: "(e: React.MouseEvent) => void",
    },

    size: {
      description:
        "Specifies the size of the icon in pixels. This prop accepts a string value (like '24px') or a number. Adjust the size based on the context in which the icon is used, for instance, making it larger in buttons or smaller in toolbar icons.",
      type: "string",
      defaultValue: "24px",
    },
  },
  tokens: buildTokenDescriptions(IconTokens, iconTokensConfig),
};

export { icon };
