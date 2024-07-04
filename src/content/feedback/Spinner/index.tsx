import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { SpinnerController } from "./Controller/Spinner.Controller";

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
  description: "This component uses a filled primary icon for all applications",
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
        "different sizes that the component can have, according to the need",
      type: "ISpinnerSize",
      options: [
        { id: "large", label: "Large" },
        { id: "medium", label: "Medium" },
        { id: "small", label: "Small" },
      ],
    },
    appearance: {
      description: "colors used to identify the state of the component",
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
        "indicates when the background of the spinner should have color",
    },
  },
  tokens: buildTokenDescriptions(inube.spinner, spinnerTokensConfig),
};

export { spinner };
