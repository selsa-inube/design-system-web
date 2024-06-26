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
  description: "This component uses a filled primary icon for all applications",
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
      title="Avatar"
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
      description: "indicates the width that the component should take",
      type: "input",
    },
    animated: {
      description: "enable loading effect animation",
    },
  },
  tokens: buildTokenDescriptions(inube.skeleton, skeletonLineTokensConfig),
};

export { skeletonLine };
