import { SkeletonLine } from "@inube/design-system";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const skeletonLineTokensConfig = {
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
