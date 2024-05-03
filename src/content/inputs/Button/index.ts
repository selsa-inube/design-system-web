import { Button } from "@inube/design-system";
import { MdAdd } from "react-icons/md";

const button = {
  description: "This component uses a filled primary icon for all applications",
  example: Button,
  name: "Button",
  props: {
    children: "Button",
    appearance: "primary",
    path: "/privilege",
    iconBefore: MdAdd,
    loading: false,
    disabled: false,
    type: "button",
    spacing: "wide",
    variant: "filled",
    fullwidth: false,
    onClick: () => console.log("clicked from Default-story"),
    cursorHover: false,
    parentHover: false,
  },
};

export { button };
