import { Nav } from "@inubekit/nav";
import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const navTokensConfig = {
  businessUnit: "inube",
  component: "nav",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const nav = {
  description: "This component uses a filled primary icon for all applications",
  example: Nav,
  name: "Nav",
  props: {
    navigation: {
      title: "MENU",
      sections: {
        administrate: {
          name: "ADMINISTRATE",
          links: {
            text: {
              id: "text",
              label: "Text",
              icon: MdKey,
              path: "/components/text",
            },
            textfield: {
              id: "textfield",
              label: "Textfield",
              icon: MdMeetingRoom,
              path: "/components/textfield",
            },
            textarea: {
              id: "textarea",
              label: "Textarea",
              icon: MdPhone,
              path: "/components/textarea",
            },
            crm: {
              id: "crm",
              label: "CRM",
              icon: MdStarBorder,
              path: "/crm",
            },
          },
        },
        request: {
          name: "REQUEST",
          links: {
            documents: {
              id: "documents",
              label: "Documents",
              icon: MdBadge,
              path: "/documents",
            },
            marketing: {
              id: "marketing",
              label: "Marketing",
              icon: MdStarBorder,
              path: "/marketing",
            },
            savings: {
              id: "savings",
              label: "Savings",
              icon: MdAccountBalanceWallet,
              path: "/savings",
            },
            credit: {
              id: "credit",
              label: "Credit",
              icon: MdAccountBalance,
              path: "/credit",
            },
          },
        },
      },
    },
    logoutPath: "/logout",
    logoutTitle: "logout",
    collapse: true,
  },
  propTypes: {
    navigation: {
      description:
        "The primary object that will organize and store the requisite paths for the correct operation of the Nav component is forthcoming and is required",
    },
    logoutPath: {
      description:
        "is the path where the user is going to navigate when he wants to logout and is required",
      type: "input",
    },
    logoutTitle: {
      description: "title of the logout page",
      type: "input",
    },
    collapse: {
      description: "determine if the Nav should be collapsed or not",
    },
  },
  tokens: buildTokenDescriptions(inube.nav, navTokensConfig),
};

export { nav };
