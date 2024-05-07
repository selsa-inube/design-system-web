import { Text } from "@inubekit/text";

const text = {
  description:
    "Component designed to specify the colors that the text receives within the application",
  example: Text,
  name: "Text",
  props: {
    children: "“The quick brown fox jumps over the lazy dog”",
    as: "p",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    appearance: "primary",
    type: "display",
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
    },
    margin: {
      description:
        "Sets the margin in px or global values for all four sides of the component.",
    },
    padding: {
      description:
        "Sets the padding in px p global values for all four sides of the component",
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
};

export { text };
