import { MdWarning } from "react-icons/md";
import { FlagController } from "./Controller/Flag.Controller";

const flag = {
  description:
    "The Flag component is used to display important information or alerts in a visually prominent way. This component is often used to inform users of changes, errors, warnings, or other critical information that needs immediate attention.",
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
    title: "Title",
    description:
      "This is a description of the flag, providing more details about the message conveyed.",
    icon: MdWarning,
    appearance: "primary",
    duration: 10000,
    closeFlag: () => {
      console.log("Flag closed");
    },
  },
  propTypes: {
    icon: {
      description:
        "The icon to display within the Flag. Icons help visually communicate the type of message or alert.",
      type: "element",
    },
    title: {
      description:
        "The title text displayed prominently in the Flag, summarizing the message.",
      type: "string",
    },
    description: {
      description:
        "Additional text providing more details about the message. If the description is too long, it may be truncated based on the component's configuration.",
      type: "string",
    },
    appearance: {
      description:
        "Defines the visual style of the Flag, including color scheme and icon appearance. This helps convey the type of message, such as a warning or success message.",
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
    },
    duration: {
      description:
        "Specifies the duration (in milliseconds) for which the Flag is displayed. If provided, a countdown bar will be shown, indicating the time remaining until the Flag automatically closes.",
      type: "number",
    },
    closeFlag: {
      description:
        "A callback function triggered when the Flag is dismissed, either manually by the user or automatically after the duration ends. This function allows for custom behavior upon the Flag's closure.",
      type: "function",
    },
  },
};

export { flag };
