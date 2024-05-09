import { Link } from "@inubekit/link";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const linkTokensConfig = {
  businessUnit: "inube",
  component: "link",
  block: "content",
  element: "color",
  include: [
    "businessUnit",
    "component",
    "block",
    "element",
    "modifier",
    "token",
    "reference",
  ],
};

const link = {
  description: "This component uses a filled primary icon for all applications",
  example: Link,
  name: "Link",
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
    },
    hover: {
      description: "Indicates when the mouse passes over the text",
    },
  },
  tokens: buildTokenDescriptions(inube.link, linkTokensConfig),
};

export { link };
