import { ProgressBarTokens } from "@inubekit/progressbar";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { ProgressBarController } from "./Controller/ProgressBar.Controller";

const progressBarTokensConfig = {
  businessUnit: "inube",
  component: "progressbar",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const progressBar = {
  description:
    "The ProgressBar component visually indicates the progress of a task or process.",
  example: ProgressBarController,
  name: "ProgressBar",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/72vzhr?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="ProgressBar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    height: "4px",
    appearance: "primary",
    animated: true,
    progress: 70,
    onComplete: () => {
      console.log("progress bar");
    },
  },
  propTypes: {
    height: {
      description:
        "Specifies the height of the progress bar. This allows customization of the bar's thickness to fit the design needs.",
      type: "string",
    },
    animated: {
      description:
        "Indicates whether the progress bar should be animated. Set to true to animate the progress bar.",
      type: "boolean",
    },
    appearance: {
      description:
        "Determines the color theme of the progress bar, indicating different states like primary, success, warning, etc.",
      type: "IProgressBarAppearance",
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
    onComplete: {
      description:
        "A callback function that is triggered when the progressBar reaches 100%.",
      type: "function",
    },
  },
  tokens: buildTokenDescriptions(ProgressBarTokens, progressBarTokensConfig),
};

export { progressBar };
