import { Tag } from "@inubekit/tag";

const tag = {
  description: "Icons used to communicate actions and decisions graphically",
  example: Tag,
  name: "Tag",
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
};

export { tag };
