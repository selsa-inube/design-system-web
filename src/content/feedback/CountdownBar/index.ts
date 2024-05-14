import { CountdownBar } from "@inubekit/countdownbar";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

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
  example: CountdownBar,
  name: "CountdownBar",
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
