import { BlanketController } from "./Controller/Blanket.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

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
  description: "This component uses a filled primary icon for all applications",
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
      description: "Whether the icon changes upon cursor hover",
      type: "ReactElement",
    },
  },
  tokens: buildTokenDescriptions(inube.blanket, blanketTokensConfig),
};

export { blanket };
