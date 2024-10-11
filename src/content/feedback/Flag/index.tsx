import { FlagController } from "./Controller/Flag.Controller";
import { Text } from "@inubekit/text";

const flag = {
  description:
    "The `Flag` component is used to display important information or alerts in a visually prominent way. This component is often used to inform users of changes, errors, warnings, or other critical information that requires immediate attention. It works in conjunction with a `FlagProvider`, which manages the lifecycle of each Flag. The provider is responsible for adding, removing, and controlling the visibility and timing of Flags across the application. Each Flag is uniquely identified using an `id`, and its automatic dismissal can be controlled via the `duration` prop, with the `FlagProvider` handling the state updates accordingly.",
  example: FlagController,
  name: "Flag",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/9grh4r?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Flag"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    id: "flag-1",
    title: "Title",
    description:
      "This is a description of the flag, providing more details about the message conveyed.",
    appearance: "primary",
    duration: 10000,
  },
  propTypes: {
    id: {
      description:
        "A unique identifier for the Flag. This `id` is used to manage the lifecycle of the Flag, such as identifying which Flag to remove when it's dismissed.",
      type: "string",
    },

    title: {
      description:
        "The title of the Flag, displayed prominently at the top. This provides a concise summary of the message or alert being presented to the user. The title should be brief and informative, clearly indicating the type of alert.",
      type: "string",
    },

    description: {
      description:
        "Additional text that provides more details about the Flag's message. If the description is too long, the component may automatically truncate it and append an ellipsis to indicate that more content exists but is hidden.",
      type: "string",
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the visual style of the Flag, including the color scheme and the type of icon displayed. The appearance helps convey the nature of the message, such as whether it's a warning, success, or informational alert. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Standard color scheme for general
              information or messages.
            </li>
            <li>
              <strong>Success</strong>: Indicates a successful operation or
              positive feedback.
            </li>
            <li>
              <strong>Warning</strong>: Represents a cautionary message or
              alert, often requiring user attention.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical or error-related
              alerts that need immediate action.
            </li>
            <li>
              <strong>Help</strong>: Provides guidance or informational support
              to the user.
            </li>
            <li>
              <strong>Dark</strong>: A neutral, darker color scheme for less
              prominent alerts.
            </li>
            <li>
              <strong>Gray</strong>: Used for secondary or low-priority
              information, implying lower importance.
            </li>
            <li>
              <strong>Light</strong>: Light, subtle color scheme for background
              information or less prominent notifications.
            </li>
          </ul>
        </>
      ),
      type: "IFlagAppearance",
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

    duration: {
      description:
        "Specifies the duration (in milliseconds) for which the Flag is displayed. When this value is provided, a countdown bar will appear, visually indicating the time remaining until the Flag automatically closes. If no duration is provided, the Flag will remain open until manually dismissed.",
      type: "number",
      table: {
        defaultValue: { summary: 10000 },
      },
    },
  },
};

export { flag };
