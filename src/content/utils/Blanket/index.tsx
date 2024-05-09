import { BlanketController } from "./Controller/Blanket.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const blanketTokensConfig = {
  businessUnit: "inube",
  component: "assisted",
  block: "background",
  element: "color",
  include: [
    "businessUnit",
    "component",
    "block",
    "element",
    "token",
    "reference",
  ],
};

const blanket = {
  description: "This component uses a filled primary icon for all applications",
  example: BlanketController,
  name: "Blanket",
  props: {},
  propTypes: {},
  tokens: buildTokenDescriptions(inube.blanket, blanketTokensConfig),
};

export { blanket };
