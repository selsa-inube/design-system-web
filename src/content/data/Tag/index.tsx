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
  description:
    "The Tag component provides a visual label for categorization, status indication, or selection. It can display a label with optional styling, and can include an icon for additional functionality such as removal.",
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
      description:
        "The text content displayed within the Tag. It serves to identify or classify the tagged item or element. For instance, 'New', 'Sale', or 'Featured'.",
      type: "string",
    },
    removable: {
      description:
        "A boolean that determines whether the Tag includes a close icon, allowing users to remove the tag if the functionality is implemented. This is useful for dynamic lists or selections.",
      type: "boolean",
      default: false,
    },
    onClose: {
      description:
        "A function that is called when the close icon is clicked, typically used to remove the Tag from the display. This function should handle the logic for removing the Tag or handling the event.",
      type: "function",
    },
    appearance: {
      description:
        "Defines the color theme applied to the Tag, which sets the background and text colors according to the theme. Options include 'primary', 'success', 'warning', 'danger', 'help', 'dark', 'gray', and 'light'. These themes help to visually distinguish the Tag's purpose or category.",
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
      description:
        "Controls the intensity of the Tag's background color. The 'normal' option applies a standard background color, while 'strong' increases the color's vibrancy, making the Tag more prominent.",
      type: "ITagWeight",
      options: [
        { id: "normal", label: "Normal" },
        { id: "strong", label: "Strong" },
      ],
    },
  },
  tokens: buildTokenDescriptions(inube.tag, tagTokensConfig),
};

export { tag };
