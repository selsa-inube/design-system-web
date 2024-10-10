import { TextTokens } from "@inubekit/text";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { TextController } from "./Controller/Text.Controller";

const textTokensConfig = {
  businessUnit: "inube",
  component: "text",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "block", order: 4 },
    { id: "element", order: 5 },
    { id: "modifier", order: 6 },
    { id: "token", order: 7 },
    { id: "reference", order: 8 },
  ],
};

const text = {
  description:
    "The Text component is used to render various types of text elements in the application, providing options for alignment, size, appearance, and more. It supports different HTML elements and styles, making it versatile for both standard and interactive text displays.",
  example: TextController,
  name: "Text",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/gqwn39?view=split&hidenavigation=0&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Text"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    children: "“The quick brown fox jumps over the lazy dog”",
    as: "p",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    appearance: "dark",
    type: "body",
    size: "large",
    cursorHover: false,
    parentHover: false,
    ellipsis: false,
    disabled: false,
  },
  propTypes: {
    children: {
      description:
        "The content of the Text component, typically a string of text to be displayed.",
      type: "ReactNode",
    },
    margin: {
      description:
        "Sets the margin around the text, accepting values in pixels or global spacing values.",
      type: "string",
    },
    padding: {
      description:
        "Sets the padding inside the text container, accepting values in pixels or global spacing values.",
      type: "string",
    },
    textAlign: {
      description: "Controls the alignment of the text within its container.",
      type: "ITextAlignment",
      options: [
        { id: "start", label: "Start" },
        { id: "center", label: "Center" },
        { id: "end", label: "End" },
        { id: "justify", label: "Justify" },
      ],
    },
    as: {
      description:
        "Determines the HTML element that the Text component will render as, useful for semantic HTML and accessibility.",
      type: "ITextHtmlElement",
      options: [
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
    },
    disabled: {
      description:
        "Applies a disabled style to the text, indicating that the text is not interactive or is in a disabled state.",
      type: "boolean",
    },
    size: {
      description:
        "Defines the size of the text, aligning with typography roles defined in the design system.",
      type: "ITextSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    type: {
      description:
        "Specifies the typography role of the text, such as body, display, label, title, or headline.",
      type: "ITextType",
      options: [
        { id: "body", label: "Body" },
        { id: "display", label: "Display" },
        { id: "label", label: "Label" },
        { id: "title", label: "Title" },
        { id: "headline", label: "Headline" },
      ],
    },
    appearance: {
      description:
        "Defines the visual style of the text, such as color and emphasis, according to the design system's color palette.",
      type: "ITextAppearance",
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
    cursorHover: {
      description:
        "When true, changes the cursor to a pointer on hover, indicating that the text is interactive.",
      type: "boolean",
    },
    parentHover: {
      description:
        "When true, the text will visually respond to the hover state of its parent container, useful for grouped interactions.",
      type: "boolean",
    },
    ellipsis: {
      description:
        "Applies an ellipsis to overflowed text, indicating that the full content is not visible. This is particularly useful for preventing text from breaking the layout.",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(TextTokens, textTokensConfig),
};

export { text };
