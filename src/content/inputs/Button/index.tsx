import { MdAdd } from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { ButtonController } from "./Controller/Button.Controller";
import { ButtonTokens } from "@inubekit/button";
import { Text } from "@inubekit/text";

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
      description:
        "Specifies the text to be displayed inside the button. This is the main content that communicates the action the button will trigger.",
      type: "string",
    },

    loading: {
      description:
        "If `true`, displays a loading spinner on top of the button. This is useful for indicating that a process is ongoing, such as a form submission or data loading. When `loading` is enabled, the button remains interactive unless `disabled` is also set to `true`.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the base styling of the button, including its color and visual emphasis. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Standard color scheme for general
              actions.
            </li>
            <li>
              <strong>Success</strong>: Indicates successful or positive
              actions.
            </li>
            <li>
              <strong>Warning</strong>: Used for cautionary or time-sensitive
              actions.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical or destructive
              actions.
            </li>
            <li>
              <strong>Help</strong>: Provides information or support actions.
            </li>
            <li>
              <strong>Dark</strong>: Neutral color for less prominent actions.
            </li>
            <li>
              <strong>Gray</strong>: Used for secondary or inactive actions.
            </li>
            <li>
              <strong>Light</strong>: For subtle or less prominent buttons.
            </li>
          </ul>
        </>
      ),
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
      table: {
        defaultValue: { summary: "primary" },
      },
    },

    disabled: {
      description:
        "If `true`, disables the button, making it non-interactive. In this state, the button's appearance is often dimmed, and it no longer responds to user interactions like clicks.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    iconBefore: {
      description:
        "Specifies an icon to be rendered before the button's text. This icon provides a visual cue about the button's action, often used to enhance clarity or appeal.",
      type: "ReactElement",
    },

    iconAfter: {
      description:
        "Specifies an icon to be rendered after the button's text. This is similar to `iconBefore`, but the icon appears to the right of the text.",
      type: "ReactElement",
    },

    type: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the button's function or type. Available options include:"
          />
          <ul>
            <li>
              <strong>Button</strong>: A standard clickable button that triggers
              an action.
            </li>
            <li>
              <strong>Submit</strong>: Submits form data, typically used within
              forms.
            </li>
            <li>
              <strong>Reset</strong>: Resets form data to its initial values.
            </li>
            <li>
              <strong>Link</strong>: Acts as a hyperlink, navigating users to a
              specified path.
            </li>
          </ul>
        </>
      ),
      type: "IButtonType",
      options: [
        { id: "button", label: "Button" },
        { id: "submit", label: "Submit" },
        { id: "reset", label: "Reset" },
        { id: "link", label: "Link" },
      ],
      table: {
        defaultValue: { summary: "button" },
      },
    },

    spacing: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the spacing within the button, adjusting the padding and size. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: Provides more padding, resulting in a
              larger button size.
            </li>
            <li>
              <strong>Compact</strong>: Reduces the padding, creating a smaller
              and more compact button.
            </li>
          </ul>
        </>
      ),
      type: "IButtonSpacing",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
      table: {
        defaultValue: { summary: "wide" },
      },
    },

    variant: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Determines the button's styling variant. Available options include:"
          />
          <ul>
            <li>
              <strong>Filled</strong>: The button has a solid background color,
              making it stand out.
            </li>
            <li>
              <strong>Outlined</strong>: The button has a transparent background
              with a visible border.
            </li>
            <li>
              <strong>None</strong>: The button has no background or border,
              appearing minimalistic.
            </li>
          </ul>
        </>
      ),
      type: "IButtonVariant",
      options: [
        { id: "filled", label: "Filled" },
        { id: "outlined", label: "Outlined" },
        { id: "none", label: "None" },
      ],
      table: {
        defaultValue: { summary: "filled" },
      },
    },

    fullwidth: {
      description:
        "If `true`, the button expands to fill the full width of its parent container, making it span the entire width.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    onClick: {
      description:
        "This prop accepts a function that is triggered when the button is clicked. The function receives a single parameter, e, which is an event object that provides information about the click event. The event object contains details such as the button clicked, the coordinates of the click, and any modifier keys pressed (e.g., Shift, Ctrl).",
      type: "(e: Event) => void",
    },

    path: {
      description:
        "Specifies the URL path for navigation when the button type is set to 'link'. This makes the button act as a link, navigating to the provided path when clicked.",
      type: "string",
    },

    cursorHover: {
      description:
        "Controls whether the cursor changes to a pointer when hovering over the button. If `true`, the button appears interactive.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },

    parentHover: {
      description:
        "Indicates whether the button's appearance should change when its parent is hovered. If `true`, the button will visually respond to the parent's hover state.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  tokens: buildTokenDescriptions(ButtonTokens, buttonTokensConfig),
};

export { button };
