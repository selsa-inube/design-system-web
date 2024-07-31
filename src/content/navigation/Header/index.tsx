import { Header } from "@inubekit/header";

import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdAndroid,
} from "react-icons/md";
import { Logo } from "./logo";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const headerTokensConfig = {
  businessUnit: "inube",
  component: "header",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const header = {
  description:
    "The Header component provides a consistent and recognizable area at the top of your application. It typically contains the logo, navigation links, and user information, enhancing the user experience by facilitating easy navigation and branding.",
  example: Header,
  name: "Header",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/dz89t7?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Header"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    portalId: "portals",
    navigation: {
      title: "MENU",
      sections: {
        administrate: {
          name: "Administrate",
          links: {
            privileges: {
              id: "privileges",
              label: "Privileges",
              icon: MdKey,
              path: "/privileges",
            },
            accounting: {
              id: "accounting",
              label: "Accounting",
              icon: MdMeetingRoom,
              path: "/accounting",
            },
            contacts: {
              id: "contacts",
              label: "Contacts",
              icon: MdPhone,
              path: "/contacts",
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
          name: "Request",
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
    logoURL: Logo,
    userName: "Leonardo Garzón",
    client: "Sistemas Enlínea S.A",
    links: [
      {
        label: "Actualizar datos",
        path: "/update-data-assisted",
        icon: MdAndroid,
      },
    ],
    showLinks: false,
    showUser: false,
  },
  propTypes: {
    portalId: {
      description:
        "The unique identifier for the portal element where the header will be rendered.",
      type: "string",
    },
    navigation: {
      description:
        "An object that defines the navigation structure within the header. It includes sections with associated links, each having an id, label, icon, and path. This structure is essential for organizing and navigating the app.",
      type: "object",
    },
    logoURL: {
      description:
        "A component used as the logo in the header, which can be an image, icon, or any other visual representation of the brand. This logo is a key element for brand identity.",
      type: "JSX.Element",
    },
    userName: {
      description:
        "The name of the user to be displayed in the header. This is typically shown alongside a user avatar and provides a personalized touch.",
      type: "string",
    },
    client: {
      description:
        "The business unit or client name to be displayed, providing context or association with the user or organization.",
      type: "string",
    },
    links: {
      description:
        "An array of link objects to be displayed in the header. Each link includes a label, path, and icon, offering quick navigation to key areas or actions.",
      type: "array",
    },
    showLinks: {
      description:
        "A boolean flag to toggle the visibility of navigation links in the header. When set to true, the specified links are displayed.",
      type: "boolean",
      defaultValue: false,
    },
    showUser: {
      description:
        "A boolean flag to toggle the visibility of the user information (like userName and client) in the header. When set to true, user details are displayed.",
      type: "boolean",
      defaultValue: true,
    },
  },
  tokens: buildTokenDescriptions(inube.header, headerTokensConfig),
};

export { header };
