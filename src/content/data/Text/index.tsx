import { TextTokens } from "@inubekit/text";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { TextController } from "./Controller/Text.Controller";
import { Text } from "@inubekit/text";
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
        "The content of the Text component, typically a string to be displayed. It can be plain text or React elements. If no children are provided, the component will not render any content.",
      type: "ReactNode",
    },

    margin: {
      description:
        "Sets the margin around the text. This property accepts values in pixels (px) or global spacing values. It controls the space between the text and its surrounding elements. You can apply uniform or side-specific margins using CSS shorthand.",
      type: "string",
      table: {
        defaultValue: { summary: "0px" },
      },
    },

    padding: {
      description:
        "Sets the padding inside the text container, controlling the space between the content and the component’s border. This property accepts values in pixels (px) or global spacing values, helping to adjust the content’s placement within the container.",
      type: "string",
      table: {
        defaultValue: { summary: "0px" },
      },
    },

    cursorHover: {
      description:
        "When `true`, the cursor will change to a pointer when hovered over the text, indicating that the text is interactive. Typically used when the text has a clickable action, such as links or buttons.",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    parentHover: {
      description:
        "When `true`, the text visually responds to the hover state of its parent container, even if the text itself is not hovered. This is useful when hover effects need to apply to groups of elements, allowing for a consistent hover experience across multiple elements.",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    disabled: {
      description:
        "When `true`, the text will be displayed in a disabled style, signaling that it is non-interactive or inactive. The text will typically be dimmed and will not respond to hover or click actions.",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    ellipsis: {
      description:
        "When `true`, applies an ellipsis ('...') to text that exceeds the available container width, indicating that the full content is not visible. This is particularly useful for preventing long text from breaking the layout. The text will use CSS properties such as `overflow`, `white-space`, and `text-overflow` to manage the overflow behavior.",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    onClick: {
      description:
        "A callback function triggered when the text is clicked. This can be used to add interactivity to text elements, such as navigation or performing specific actions when the text is clicked.",
      type: "(event: Event) => void",
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the visual style of the text, such as color and emphasis, according to the design system's color palette. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Default color scheme.
            </li>
            <li>
              <strong>Success</strong>: Indicates success or positive outcomes.
            </li>
            <li>
              <strong>Warning</strong>: Represents caution or attention needed.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical actions, commonly
              associated with errors or destructive actions.
            </li>
            <li>
              <strong>Help</strong>: Provides assistance or guidance.
            </li>
            <li>
              <strong>Dark</strong>: Darker, neutral color scheme for emphasis.
            </li>
            <li>
              <strong>Gray</strong>: Subtle, muted color for secondary text.
            </li>
            <li>
              <strong>Light</strong>: Light, less prominent text, often used for
              background elements.
            </li>
          </ul>
        </>
      ),
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

    size: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the size of the text according to predefined typography roles. Available sizes include:"
          />
          <ul>
            <li>
              <strong>Large</strong>: Largest text size, often used for
              headings.
            </li>
            <li>
              <strong>Medium</strong>: Default text size, typically used for
              body text.
            </li>
            <li>
              <strong>Small</strong>: Smallest text size, often used for fine
              print or captions.
            </li>
          </ul>
        </>
      ),
      type: "ITextSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },

    textAlign: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Controls the horizontal alignment of the text within its container. Available options include:"
          />
          <ul>
            <li>
              <strong>Start</strong>: Aligns the text to the start (left by
              default).
            </li>
            <li>
              <strong>Center</strong>: Centers the text horizontally.
            </li>
            <li>
              <strong>End</strong>: Aligns the text to the end (right by
              default).
            </li>
            <li>
              <strong>Justify</strong>: Stretches the text to align with both
              edges of the container.
            </li>
          </ul>
        </>
      ),
      type: "ITextAlignment",
      options: [
        { id: "start", label: "Start" },
        { id: "center", label: "Center" },
        { id: "end", label: "End" },
        { id: "justify", label: "Justify" },
      ],
    },

    type: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Specifies the typography role of the text, such as 'body', 'display', 'label', 'title', or 'headline'. Available options include:"
          />
          <ul>
            <li>
              <strong>Body</strong>: Regular text used in paragraphs.
            </li>
            <li>
              <strong>Display</strong>: Large, bold text for visual emphasis.
            </li>
            <li>
              <strong>Label</strong>: Smaller text used for labels and
              descriptions.
            </li>
            <li>
              <strong>Title</strong>: Text used for headings and titles.
            </li>
            <li>
              <strong>Headline</strong>: Bold text used for headlines and
              important sections.
            </li>
          </ul>
        </>
      ),
      type: "ITextType",
      options: [
        { id: "body", label: "Body" },
        { id: "display", label: "Display" },
        { id: "label", label: "Label" },
        { id: "title", label: "Title" },
        { id: "headline", label: "Headline" },
      ],
    },

    as: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Specifies the HTML tag that the Text component will render as. This is useful for ensuring semantic HTML and accessibility. Available tags include:"
          />
          <ul>
            <li>
              <strong>H1</strong>: Main heading, usually the largest text.
            </li>
            <li>
              <strong>H2</strong>: Secondary heading.
            </li>
            <li>
              <strong>H3</strong>: Tertiary heading.
            </li>
            <li>
              <strong>P</strong>: Paragraph text, default for body content.
            </li>
            <li>
              <strong>Span</strong>: Inline text, often used for smaller or
              embedded content.
            </li>
            <li>
              <strong>Legend</strong>: Describes a fieldset element.
            </li>
            <li>
              <strong>Blockquote</strong>: Quoted text, often indented for
              emphasis.
            </li>
            <li>
              <strong>Figcaption</strong>: Caption for a figure element.
            </li>
          </ul>
        </>
      ),
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
        { id: "blockquote", label: "Blockquote" },
        { id: "figcaption", label: "Figcaption" },
      ],
    },

    weight: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Controls the font-weight of the text, allowing it to be displayed as regular or bold. Available options include:"
          />
          <ul>
            <li>
              <strong>Normal</strong>: Regular font weight, used for body text.
            </li>
            <li>
              <strong>Bold</strong>: Heavier font weight for emphasis, often
              used for headings or important text.
            </li>
          </ul>
        </>
      ),
      type: "ITextWeight",
      options: [
        { id: "normal", label: "Normal" },
        { id: "bold", label: "Bold" },
      ],
    },
  },
  tokens: buildTokenDescriptions(TextTokens, textTokensConfig),
};

export { text };
