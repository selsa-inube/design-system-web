import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { LinkController } from "./Controller/Link.Controller";

const linkTokensConfig = {
  businessUnit: "inube",
  component: "link",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
    { id: "reference", order: 7 },
  ],
};

const link = {
  description: "This component uses a filled primary icon for all applications",
  example: LinkController,
  name: "Link",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/f54pvj?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Link"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    children: "Link",
    size: "large",
    type: "body",
    path: "/",
  },
  propTypes: {
    type: {
      description:
        "This prop is used to select one of the typography roles defined in the Foundations.",
      type: "ILinkType",
      options: [
        { id: "body", label: "body" },
        { id: "display", label: "display" },
        { id: "label", label: "label" },
        { id: "title", label: "title" },
        { id: "headline", label: "headline" },
      ],
    },
    size: {
      description:
        "This prop is used to select one of the typography roles defined in the Foundations.",
      type: "ILinkSize",
      options: [
        { id: "large", label: "large" },
        { id: "medium", label: "medium" },
        { id: "small", label: "small" },
      ],
    },
    children: {
      description: "The text to be displayed",
    },
    path: {
      description:
        "is the path where the MenuLink is going to navigate and is required.",
      type: "input",
    },
    hover: {
      description: "Indicates when the mouse passes over the text",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(inube.link, linkTokensConfig),
};

export { link };
