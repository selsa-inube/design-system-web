import { Text } from "@inubekit/text";

const text = {
  description:
    "Component designed to specify the colors that the text receives within the application",
  example: Text,
  name: "Text",
  props: {
    children: "“The quick brown fox jumps over the lazy dog”",
    as: "",
    textAlign: "center",
    margin: "",
    padding: "",
    appearance: "primary",
    type: "display",
    size: "large",
    disabled: false,
    cursorHover: true,
    ellipsis: false,
    parentHover: false,
  },
  typeOptions: {
    textAlign: [
      { id: "start", label: "Start" },
      { id: "center", label: "Center" },
      { id: "end", label: "End" },
      { id: "justify", label: "Justify" },
    ],
    as: [
      { id: "h1", label: "H1" },
      { id: "h2", label: "H2" },
      { id: "h3", label: "H3" },
      { id: "h4", label: "H4" },
      { id: "h5", label: "H5" },
      { id: "h6", label: "H6" },
      { id: "p", label: "P" },
      { id: "span", label: "Span" },
      { id: "legend", label: "Legend" },
      { id: "figcaption", label: "Figcaption" },
      { id: "blockquote", label: "Blockquote" },
    ],
    size: [
      { id: "large", label: "Large" },
      { id: "medium", label: "Medium" },
      { id: "small", label: "Small" },
    ],
    type: [
      { id: "body", label: "Body" },
      { id: "display", label: "Display" },
      { id: "label", label: "Label" },
      { id: "title", label: "Title" },
      { id: "headline", label: "Headline" },
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

export { text };
