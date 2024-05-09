import { CountdownBar } from "@inubekit/countdownbar";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const countdownBarTokensConfig = {
  businessUnit: "inube",
  component: "countdownBar",
  element: "color",
  include: ["businessUnit", "component", "appearance", "element", "token"],
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
    },
    appearance: {
      description:
        "indicates the name of the customer or company associated with the user.",
    },
    duration: {
      description:
        "indicates the name of the customer or company associated with the user.",
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
