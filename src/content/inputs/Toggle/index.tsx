import { ToggleController } from "./Controller/Toggle.Controller";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";

const toggleTokensConfig = {
  businessUnit: "inube",
  component: "toggle",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "status", order: 3 },
    { id: "block", order: 4 },
    { id: "element", order: 5 },
    { id: "modifier", order: 6 },
    { id: "token", order: 7 },
  ],
};

const toggle = {
  description:
    "The Toggle component is a switch used to switch between two states, such as on and off. It provides a visual representation of a binary option and is commonly used in forms and settings.",
  example: ToggleController,
  name: "Toggle",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/s8j7wd?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Toggle"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    id: "id",
    disabled: false,
    name: "name",
    value: "switchTest1",
    checked: false,
    size: "large",
    onChange: () => {},
    margin: "0px",
    padding: "0px",
    label: "",
  },
  propTypes: {
    id: {
      description:
        "A unique identifier for the toggle input. It allows the `Label` component to associate itself with the input element, enhancing accessibility.",
      type: "string",
    },
    disabled: {
      description:
        "Indicates whether the toggle is in a disabled state. When true, the toggle is non-interactive and appears dimmed.",
      type: "boolean",
    },
    checked: {
      description:
        "Defines the current checked state of the toggle. When true, the toggle is in the 'on' position; when false, it is in the 'off' position.",
      type: "boolean",
    },
    name: {
      description:
        "A descriptive name for the value property to be submitted in a form. This helps identify the specific toggle's value during form submission.",
      type: "string",
    },
    value: {
      description:
        "The value to be submitted when the toggle is part of a form. This value corresponds to the current state of the toggle.",
      type: "string",
      options: [
        { id: "switchTest1", label: "switchTest1" },
        { id: "switchTest2", label: "switchTest2" },
        { id: "switchTest3", label: "switchTest3" },
        { id: "switchTest4", label: "switchTest4" },
      ],
    },
    onChange: {
      description:
        "A function that is called whenever the toggle's state changes. This handler receives a React.ChangeEvent<HTMLInputElement> as an argument.",
      type: "function",
    },
    size: {
      description:
        "Specifies the size of the toggle. The size can affect the visual appearance and click area of the toggle.",
      type: "IToggleSize",
      options: [
        { id: "small", label: "Small" },
        { id: "large", label: "Large" },
      ],
    },
    label: {
      description:
        "The text content displayed next to the toggle switch. It provides a label for the toggle, explaining its purpose or the choice it represents.",
      type: "string",
    },
    margin: {
      description:
        "Sets the margin around the toggle component, defining space outside the toggle's bounding box. Values can be specified in pixels or other global CSS units.",
      type: "string",
    },
    padding: {
      description:
        "Sets the padding inside the toggle component, defining space inside the toggle's bounding box, affecting the overall size and click area.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, toggleTokensConfig),
};

export { toggle };
