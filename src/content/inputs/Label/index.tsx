import { LabelController } from "./Controller/Label.Controller";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { LabelTokens } from "@inubekit/label";

const labelTokensConfig = {
  businessUnit: "inube",
  component: "label",
  block: "content",
  element: "color",
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

const label = {
  description:
    "The Label component is used to provide a descriptive text label for form elements, enhancing accessibility and usability by associating with a specific input element.",
  example: LabelController,
  name: "Label",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/qcq5sm?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Label"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    htmlFor: "id",
    children: "Label Text",
    size: "large",
    disabled: false,
    focused: false,
    invalid: false,
    margin: "0px",
    padding: "0px",
  },
  propTypes: {
    disabled: {
      description:
        "Indicates whether the text is in a disabled state, making it less prominent and signaling that the associated input is not currently interactive.",
    },
    focused: {
      description:
        "Indicates whether the label or associated input is focused, often highlighting the label to guide user attention to the active form element.",
    },
    htmlFor: {
      description:
        "Associates the label with a specific form input by matching the label's htmlFor attribute with the input's id attribute, enhancing accessibility.",
      type: "string",
    },
    invalid: {
      description:
        "Indicates whether the label is associated with an invalid input state, often changing the label's appearance to signal an error or issue.",
    },
    margin: {
      description:
        "Sets the margin around the label component, defining space outside the label's bounding box. Values can be specified in pixels or other global CSS units.",
      type: "string",
    },
    padding: {
      description:
        "Sets the padding within the label component, defining space inside the label's bounding box. This provides control over the space between the text and the label's borders.",
      type: "string",
    },
    size: {
      description:
        "Specifies the font size used in the label. Options include 'large', 'medium', and 'small', allowing for different text sizes to suit various design requirements.",
      type: "ILabelSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    children: {
      description:
        "The text or content to be displayed within the label, which can include plain text or other React components, such as icons or styled elements.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(LabelTokens, labelTokensConfig),
};

export { label };
