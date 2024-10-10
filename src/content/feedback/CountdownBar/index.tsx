import { CountdownBarTokens } from "@inubekit/countdownbar";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { CountdownBarController } from "./Controller/CountdownBar.Controller";

const countdownBarTokensConfig = {
  businessUnit: "inube",
  component: "countdownBar",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const countdownBar = {
  description:
    "The CountdownBar component visually represents a countdown or timer, using a progress bar that animates from full to empty over a specified duration.",
  example: CountdownBarController,
  name: "CountdownBar",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/p6gcv2?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="CountdownBar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    height: "4px",
    appearance: "primary",
    duration: 3000,
    paused: true,
    onCountdown: () => {
      console.log("countdown");
    },
  },
  propTypes: {
    height: {
      description:
        "Specifies the height of the countdown bar. This allows customization of the bar's thickness to fit the design needs.",
      type: "string",
    },
    appearance: {
      description:
        "Determines the color theme of the countdown bar, indicating different states like primary, success, warning, etc.",
      type: "ICountdownBarAppearance",
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
        "Specifies the duration of the countdown in milliseconds. This controls how long the bar takes to complete the countdown.",
      type: "number",
    },
    paused: {
      description:
        "Indicates whether the countdown animation is paused. Set to true to pause the animation.",
      type: "boolean",
    },
    onCountdown: {
      description:
        "A callback function that is triggered when the countdown reaches zero.",
      type: "function",
    },
  },
  tokens: buildTokenDescriptions(CountdownBarTokens, countdownBarTokensConfig),
};

export { countdownBar };
