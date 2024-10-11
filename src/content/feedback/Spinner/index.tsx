import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { SpinnerController } from "./Controller/Spinner.Controller";
import { SpinnerTokens } from "@inubekit/spinner";
import { Text } from "@inubekit/text";

const spinnerTokensConfig = {
  businessUnit: "inube",
  component: "spinner",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "type", order: 4 },
    { id: "block", order: 5 },
    { id: "element", order: 6 },
    { id: "token", order: 7 },
    { id: "reference", order: 8 },
  ],
};

const spinner = {
  description:
    "The Spinner component provides a visual indication that an action is processing or loading. It is commonly used to keep users informed about the status of their actions, such as data loading or submission.",
  example: SpinnerController,
  name: "Spinner",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/jjq4x6?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Spinner"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    size: "medium",
    appearance: "primary",
    transparent: false,
  },
  propTypes: {
    size: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the size of the spinner. Choose the size based on the context and available space. Available options include:"
          />
          <ul>
            <li>
              <strong>Large</strong>: Largest size, typically used in prominent
              loading states where space allows.
            </li>
            <li>
              <strong>Medium</strong>: Default size, often used in most UI
              elements requiring a loading indicator.
            </li>
            <li>
              <strong>Small</strong>: Smallest size, suitable for compact spaces
              or inline with text.
            </li>
          </ul>
        </>
      ),
      type: "ISpinnerSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
      table: {
        defaultValue: { summary: "medium" },
      },
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Specifies the color scheme of the spinner, representing different states or levels of importance. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Default color, representing general
              loading actions.
            </li>
            <li>
              <strong>Success</strong>: Indicates a successful or positive
              operation in progress.
            </li>
            <li>
              <strong>Warning</strong>: Represents cautionary or time-sensitive
              processes.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical or error-related
              actions.
            </li>
            <li>
              <strong>Help</strong>: Provides information or assistance to the
              user.
            </li>
            <li>
              <strong>Dark</strong>: A neutral color for subdued or less
              prominent actions.
            </li>
            <li>
              <strong>Gray</strong>: Secondary color for low-importance or
              inactive elements.
            </li>
            <li>
              <strong>Light</strong>: Light color scheme, often used for minimal
              or background-focused elements.
            </li>
          </ul>
        </>
      ),
      type: "ISpinnerAppearance",
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

    transparent: {
      description:
        "When `true`, the spinner's background becomes transparent, allowing it to overlay on colored or complex backgrounds without obstruction. This is useful in overlays or situations where the spinner needs to blend with the background.",
      type: "boolean",
      options: [
        { id: "true", label: "True" },
        { id: "false", label: "False" },
      ],
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  tokens: buildTokenDescriptions(SpinnerTokens, spinnerTokensConfig),
};

export { spinner };
