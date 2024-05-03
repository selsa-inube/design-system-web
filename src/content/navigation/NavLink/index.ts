import { NavLink } from "@inube/design-system";
import { MdHouse } from "react-icons/md";

const navLink = {
  description: "This component uses a filled primary icon for all applications",
  example: NavLink,
  name: "NavLink",
  props: {
    id: "privileges",
    label: "Privileges",
    path: "/privileges",
    disabled: false,
    icon: MdHouse,
  },
};

export { navLink };
