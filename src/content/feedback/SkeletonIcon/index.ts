import { SkeletonIcon } from "@inubekit/skeleton";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const skeletonIconTokensConfig = {
  businessUnit: "inube",
  component: "skeleton",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const skeletonIcon = {
  description: "This component uses a filled primary icon for all applications",
  example: SkeletonIcon,
  name: "SkeletonIcon",
  installation: "npm install @inubekit/skeleton",
  props: {
    size: "24px",
    animated: false,
  },
  propTypes: {
    size: {
      description: "sets the size of the skeleton icon component",
      type: "input",
    },
    animated: {
      description:
        "toggles whether or not the skeleton component's animation is active",
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonIconTokensConfig),
};

export { skeletonIcon };
