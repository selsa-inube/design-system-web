import { SkeletonLine } from "@inube/design-system";

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
};

export { skeletonLine };
