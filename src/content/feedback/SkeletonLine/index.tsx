import { SkeletonLine } from "@inubekit/skeleton";
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
  description:
    "The SkeletonLine component serves as a placeholder to indicate loading content, enhancing the user experience by showing a visual placeholder where content will eventually appear. This component helps in maintaining layout integrity during data fetches or slow content loads.",
  example: SkeletonLine,
  name: "SkeletonLine",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/drk3jh?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="SkeletonLine"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  installation: "npm install @inubekit/skeleton",
  props: {
    width: "100%",
    animated: false,
  },
  propTypes: {
    width: {
      description:
        "Specifies the width of the SkeletonLine component. This prop accepts any valid CSS width value, such as '100%', '50px', or 'auto', allowing for flexible sizing to match different layout requirements.",
      type: "string",
      defaultValue: "100%",
    },
    animated: {
      description:
        "Determines whether the SkeletonLine should display an animation, such as a pulsing or shimmer effect, to indicate loading. This provides a visual cue that the content is in the process of being loaded.",
      type: "boolean",
      defaultValue: false,
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonLineTokensConfig),
};

export { skeletonLine };
