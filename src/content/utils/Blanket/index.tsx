import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { BlanketController } from "./Controller/Blanket.Controller";

const blanketTokensConfig = {
  businessUnit: "inube",
  component: "blanket",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const blanket = {
  description:
    "The Blanket component serves as a backdrop overlay, often used to dim the rest of the interface when a modal, pop-up, or other content needs to be highlighted. This component enhances the visual focus on the content above it by providing a subtle, opaque layer.",
  example: BlanketController,
  name: "Blanket",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/hctljz?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Blanket"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    children: "-",
  },
  propTypes: {
    children: {
      description:
        "The content to be displayed within the Blanket component. Typically, this includes modals, pop-ups, or other interactive elements. The children are positioned in the center of the Blanket, making them the focal point while the rest of the interface is dimmed.",
      type: "ReactElement",
    },
  },
  tokens: buildTokenDescriptions(inube.blanket, blanketTokensConfig),
};

export { blanket };
