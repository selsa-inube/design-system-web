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
  description:
    "The Link component is designed to navigate users to different parts of the application. It displays text that, when clicked, redirects users to the specified path. This component is customizable in terms of size and typography, allowing for consistent styling across the application.",
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
        "Defines the typography role for the link text, providing options for different text styles such as body, display, label, title, and headline.",
      type: "ILinkType",
      options: [
        { id: "body", label: "Body" },
        { id: "display", label: "Display" },
        { id: "label", label: "Label" },
        { id: "title", label: "Title" },
        { id: "headline", label: "Headline" },
      ],
    },
    size: {
      description:
        "Specifies the size of the link text, aligning with the predefined sizes in the typography foundation.",
      type: "ILinkSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    children: {
      description:
        "The text content to be displayed within the link. This is the clickable element that users will interact with.",
      type: "React.ReactNode",
    },
    path: {
      description:
        "The URL or path the link navigates to when clicked. This prop is required and should be a valid URL or path.",
      type: "string",
    },
    hover: {
      description:
        "Indicates the hover state of the link. When true, applies hover styles to the link.",
      type: "boolean",
      defaultValue: false,
    },
  },
  tokens: buildTokenDescriptions(inube.link, linkTokensConfig),
};

export { link };
