import { Icon } from "@inubekit/icon";
import { MdAdd } from "react-icons/md";

const icon = {
  description: "Icons used to communicate actions and decisions graphically",
  example: Icon,
  name: "Icon",
  props: {
    appearance: "primary",
    icon: MdAdd,
    cursorHover: false,
    parentHover: false,
    disabled: false,
    spacing: "wide",
    variant: "none",
    shape: "rectangle",
    size: "24px",
    onClick: () => {},
  },
};

export { icon };
