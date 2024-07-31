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
  description:
    "The SkeletonIcon component provides a placeholder for icons, helping to manage the perception of loading time by displaying a low fidelity representation of content before it fully loads.",
  example: SkeletonIcon,
  name: "SkeletonIcon",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/cpzntq?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="SkeletonIcon"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  installation: "npm install @inubekit/skeleton",
  props: {
    size: "24px",
    animated: false,
  },
  propTypes: {
    size: {
      description:
        "Defines the size of the SkeletonIcon component. Accepts any valid CSS size value, such as '24px', '2em', or '1rem'. This property allows for flexible scaling of the icon to fit various design needs.",
      type: "string",
      defaultValue: "24px",
    },
    animated: {
      description:
        "Determines whether the SkeletonIcon component should display an animation to indicate loading. Set to true to activate a subtle shimmer effect, or false to keep the icon static.",
      type: "boolean",
      defaultValue: false,
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonIconTokensConfig),
};

export { skeletonIcon };
