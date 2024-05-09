import { ToggleController } from "./Controller/Toggle.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const toggleTokensConfig = {
  businessUnit: "inube",
  component: "toggle",
  block: "background",
  element: "color",
  include: [
    "businessUnit",
    "component",
    "status",
    "block",
    "element",
    "modifier",
    "token",
    "reference",
  ],
};

const toggle = {
  description: "This component uses a filled primary icon for all applications",
  example: ToggleController,
  name: "Toggle",
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
        "this element can have a label on it, so this id allows us to connect the label with the switch",
    },
    disabled: {
      description:
        "if the switch is disabled or not. This prevents any interaction.",
    },
    checked: {
      description: "",
    },
    name: {
      description:
        "descriptive name for value property to be submitted in a form",
    },
    value: {
      description: "value to be submitted in a form",
      options: [
        { id: "switchTest1", label: "switchTest1" },
        { id: "switchTest2", label: "switchTest2" },
        { id: "switchTest3", label: "switchTest3" },
        { id: "switchTest4", label: "switchTest4" },
      ],
    },
    onChange: {
      description:
        "is a function that the component receives and that can be executed every time the switch state is modified",
    },
    size: {
      description: "toggle size",
      type: "IToggleSize",
      options: [
        { id: "small", label: "Small" },
        { id: "large", label: "Large" },
      ],
    },
    label: {
      description: "component text content",
    },
    margin: {
      description:
        "Sets the margin in px or global values for all four sides of the component. Accepted values are the spacing tokens",
    },
    padding: {
      description:
        "Sets the padding in px p global values for all four sides of the component. Accepted values are the spacing tokens",
    },
  },
  tokens: buildTokenDescriptions(inube.toggle, toggleTokensConfig),
};

export { toggle };
