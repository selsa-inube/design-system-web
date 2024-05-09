import { SkeletonIcon } from "@inube/design-system";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const skeletonIconTokensConfig = {
  businessUnit: "inube",
  component: "skeleton",
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

const skeletonIcon = {
  description: "This component uses a filled primary icon for all applications",
  example: SkeletonIcon,
  name: "SkeletonIcon",
  props: {
    size: "24px",
    animated: false,
  },
  propTypes: {
    size: {
      description: "sets the size of the skeleton icon component",
    },
    animated: {
      description:
        "toggles whether or not the skeleton component's animation is active",
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonIconTokensConfig),
};

export { skeletonIcon };
