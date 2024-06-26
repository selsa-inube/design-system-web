import { inube } from "@inubekit/foundations";
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
  description: "This component uses a filled primary icon for all applications",
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
      title="Avatar"
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
        "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
      type: "input",
    },
    appearance: {
      description:
        "indicates the name of the customer or company associated with the user.",
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
        "indicates the name of the customer or company associated with the user.",
      type: "input",
    },
    paused: {
      description:
        "indicates the name of the customer or company associated with the user.",
    },
    onCountdown: {
      description:
        "indicates the name of the customer or company associated with the user.",
    },
  },
  tokens: buildTokenDescriptions(inube.countdownBar, countdownBarTokensConfig),
};

export { countdownBar };
