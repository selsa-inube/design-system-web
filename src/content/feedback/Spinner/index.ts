import { Spinner } from "@inube/design-system";

import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const spinnerTokensConfig = {
  businessUnit: "inube",
  component: "spinner",
  block: "background",
  element: "color",
  include: [
    "businessUnit",
    "component",
    "appearance",
    "type",
    "block",
    "element",
    "token",
    "reference",
  ],
};

const spinner = {
  description: "This component uses a filled primary icon for all applications",
  example: Spinner,
  name: "Spinner",
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
