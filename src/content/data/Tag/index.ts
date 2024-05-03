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
  typeOptions: {
    weight: [
      { id: "normal", label: "normal" },
      { id: "strong", label: "strong" },
    ],
    appearance: [
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
};

export { tag };
