import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { DividerController } from "./Controller/Divider.Controller";
import { inube } from "@inubekit/foundations";

const dividerTokensConfig = {
  businessUnit: "inube",
  component: "divider",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const divider = {
  description:
    "Element that helps separate pieces of content into groups, sections, options or parts, in a clear and defined way.",
  example: DividerController,
  name: "Divider",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/s9hnj9?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Divider"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    dashed: false,
  },
  propTypes: {
    dashed: {
      description:
        "It determines if the divider will be dashed or not. If not provided, the divider will be solid.",
      type: "boolean",
      default: false,
    },
  },
  tokens: buildTokenDescriptions(inube.divider, dividerTokensConfig),
};

export { divider };
