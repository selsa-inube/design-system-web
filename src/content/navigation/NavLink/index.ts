import { NavLink } from "@inubekit/nav";
import { MdHouse } from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const navLinkTokensConfig = {
  businessUnit: "inube",
  component: "navLink",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

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
  propTypes: {
    disabled: {
      description:
        "shall be determine if the tab is disabled (by Default is false) and is not required.",
    },
    selected: {
      description:
        "It is designed to ascertain whether the tab has been clicked or not (by Default is false) and is not required.",
    },
    path: {
      description:
        "is the path where the MenuLink is going to navigate and is required.",
    },
    id: {
      description: "shall be the id for the MenuLink and is required.",
    },
    onClick: {
      description:
        "shall be determine the behavior of the click event and is not required.",
    },
    icon: {
      description:
        "shall constitute the icon to be displayed within the MenuLink-component and is required",
    },
    label: {
      description:
        "shall constitute the content to be displayed within the MenuLink-component and is required",
    },
  },
  tokens: buildTokenDescriptions(inube.nav.link, navLinkTokensConfig),
};

export { navLink };
