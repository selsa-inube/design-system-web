import { SkeletonLine } from "@inube/design-system";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const skeletonLineTokensConfig = {
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

const skeletonLine = {
  description: "This component uses a filled primary icon for all applications",
  example: SkeletonLine,
  name: "SkeletonLine",
  props: {
    width: "100%",
    animated: false,
  },
  propTypes: {
    width: {
      description: "indicates the width that the component should take",
    },
    animated: {
      description: "enable loading effect animation",
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonLineTokensConfig),
};

export { skeletonLine };
