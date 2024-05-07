import { SkeletonIcon } from "@inube/design-system";

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
};

export { skeletonIcon };
