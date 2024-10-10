import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { SpinnerController } from "./Controller/Spinner.Controller";
import { SpinnerTokens } from "@inubekit/spinner";

const spinnerTokensConfig = {
  businessUnit: "inube",
  component: "spinner",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "type", order: 4 },
    { id: "block", order: 5 },
    { id: "element", order: 6 },
    { id: "token", order: 7 },
    { id: "reference", order: 8 },
  ],
};

const spinner = {
  description:
    "The Spinner component provides a visual indication that an action is processing or loading. It is commonly used to keep users informed about the status of their actions, such as data loading or submission.",
  example: SpinnerController,
  name: "Spinner",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/jjq4x6?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Spinner"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    size: "medium",
    appearance: "primary",
    transparent: false,
  },
  propTypes: {
    size: {
      description:
        "Defines the size of the spinner. Choose based on the context and space available.",
      type: "ISpinnerSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    appearance: {
      description:
        "Specifies the color scheme of the spinner, representing different states or importance levels.",
      type: "ISpinnerAppearance",
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
    transparent: {
      description:
        "Indicates whether the spinner's background should be transparent. Useful for overlaying on colored backgrounds.",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(SpinnerTokens, spinnerTokensConfig),
};

export { spinner };
