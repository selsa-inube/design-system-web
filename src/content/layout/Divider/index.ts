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
