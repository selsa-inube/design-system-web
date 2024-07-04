import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { TagController } from "./Controller/Tag.Controller";

const tagTokensConfig = {
  businessUnit: "inube",
  component: "tag",
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

const tag = {
  description: "Icons used to communicate actions and decisions graphically",
  example: TagController,
  name: "Tag",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/yjqph9?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Tag"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    appearance: "primary",
    label: "Tag",
    weight: "normal",
    removable: false,
    onClose: () => {},
  },
  propTypes: {
    label: {
      description: "Controls the text that the tag will display",
      type: "input",
    },
    removable: {
      description: "Controls the tag in order to allow an event",
    },
    onClose: {
      description: "Event that be dispatch",
    },
    appearance: {
      description: "Controls the background color of the tag",
      type: "ITagAppearance",
      options: [
        { id: "primary", label: "Primary" },
        { id: "success", label: "Success" },
        { id: "warning", label: "Warning" },
        { id: "danger", label: "Danger" },
        { id: "help", label: "Help" },
        { id: "dark", label: "Dark" },
        { id: "gray", label: "Gray" },
        { id: "light", label: "Light" },
      ],
    },
    weight: {
      description: "Controls the color load that the label receives",
      type: "ITagWeight",
      options: [
        { id: "normal", label: "normal" },
        { id: "strong", label: "strong" },
      ],
    },
  },
  tokens: buildTokenDescriptions(inube.tag, tagTokensConfig),
};

export { tag };
