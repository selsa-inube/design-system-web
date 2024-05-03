import { CountdownBar } from "@inube/design-system";

const countdownBar = {
  description: "This component uses a filled primary icon for all applications",
  example: CountdownBar,
  name: "CountdownBar",
  props: {
    height: "4px",
    appearance: "primary",
    duration: 3000,
    paused: false,
    onCountdown: () => {
      console.log("countdown");
    },
  },
};

export { countdownBar };
