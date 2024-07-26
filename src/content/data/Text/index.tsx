import { inube } from "@inubekit/foundations";
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
    "Component designed to specify the colors that the text receives within the application",
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
        "This prop allows the component to get and print text in the screen.",
      type: "input",
    },
    margin: {
      description:
        "Sets the margin in px or global values for all four sides of the component.",
      type: "input",
    },
    padding: {
      description:
        "Sets the padding in px p global values for all four sides of the component",
      type: "input",
    },
    textAlign: {
      description: "This prop controls the text-align style property.",
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
        "This prop allows the user to change the HTML element that will appear in the DOM. It's useful for adjusting the semantic meaning of the content without changing the component's appearance or behavior. For example, using 'h1' for headings and 'p' for paragraphs",
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
        " Add the “disabled” prop, which will control if the text should display a disabled state. For this you can make use of the disabled modifiers you find in the color.text tokens.",
    },
    size: {
      description:
        "This prop is used to select one of the typography roles defined in the Foundations.",
      type: "ITextSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    type: {
      description:
        "This prop is used to select one of the typography roles defined in the Foundations.",
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
        "This prop is used to select one of the typography roles defined in the Foundations.",
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
        "When cursorHover is set to true, the component will change the cursor to a pointer on hover, indicating that the text is interactive. If false, the cursor will not change, suggesting the text is not interactive",
    },
    parentHover: {
      description:
        "When parentHover is true, the text will adopt its hover state whenever the parent element is hovered over, regardless of the text's own hover state. This is useful for maintaining consistent visual feedback in nested or grouped components",
    },
    ellipsis: {
      description:
        "The ellipsis prop controls text overflow behavior. When set to true, it uses CSS properties like overflow: hidden;, white-space: nowrap;, and text-overflow: ellipsis; to truncate overflowing text and replace the excess with an ellipsis, indicating that more content is available but not visible",
    },
  },
  tokens: buildTokenDescriptions(inube.text, textTokensConfig),
};

export { text };
