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
        "This prop allows us to control the tag that we will inject in the DOM.",
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
        " prop to allow the text to use the hover modifier you find in color.text tokens and activate the cursor: pointer CSS property.",
    },
    parentHover: {
      description:
        " prop to force the text to always appear in its hover state. This works when the parent is being hover (not the text), but the parent must display as if all the component is",
    },
    ellipsis: {
      description:
        " Add the ellipsis prop to control that the text cannot overflow or resize the parent.Instead, the text will be shown as much as possible in the available space and the rest of it will be replaced with an ellipsis.To make this work you must use the overflow, white - space and text - overflow CSS properties.",
    },
  },
  tokens: buildTokenDescriptions(inube.text, textTokensConfig),
};

export { text };
