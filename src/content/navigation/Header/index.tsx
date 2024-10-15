import { Header, HeaderTokens } from "@inubekit/header";

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
        "The unique identifier for the portal element where the header will be rendered. It ensures that the Header is mounted correctly in the DOM structure.",
      type: "string",
      required: true,
    },
    navigation: {
      description:
        "An object defining the navigation structure within the header(the same for fullscreenNav). It includes sections with associated links, each having an id, label, icon, and path. This structure helps organize the navigation within the application.",
      type: "IFNavigation",
      required: false,
    },
    logoURL: {
      description:
        "A JSX element representing the logo, which can be an image or any other branding element. This helps reinforce the brand identity of the application.",
      type: "JSX.Element",
      required: true,
    },
    userName: {
      description:
        "The name of the user to be displayed in the header, providing a personalized touch to the navigation. This is often displayed alongside the user's avatar.",
      type: "string",
      required: false,
    },
    client: {
      description:
        "The client or organization name that the user belongs to. Displaying the client's name provides context for the user when interacting with the system.",
      type: "string",
      required: false,
    },
    links: {
      description:
        "An array of links that provide quick navigation to specific areas within the application. Each link includes a label, path, and an optional icon.",
      type: "IHeaderLink[ ]",
      required: false,
    },
    showLinks: {
      description:
        "A boolean flag that determines whether to display the additional navigation links in the header. If `true`, the links will be visible.",
      type: "boolean",
    },
    showUser: {
      description:
        "A boolean flag that controls the visibility of the user information in the header (such as userName and client). When set to `true`, user details will be displayed.",
      type: "boolean",
    },
    userMenu: {
      description:
        "An array of objects that define the dropdown menu items available for the user. Each object in the array should have the following structure: `{ id, label, icon, action }`. The `id` is a unique identifier for the menu item, `label` represents the name of the action (e.g., 'Settings'), `icon` is an optional React Node to provide a visual cue, and `action` is a function triggered when the menu item is clicked. This prop allows you to provide a personalized set of actions for the logged-in user, such as 'Settings', 'Profile', or 'Logout'.",
      type: "IMenuSection[ ]",
    },
  },
  tokens: buildTokenDescriptions(HeaderTokens, headerTokensConfig),
};

export { header };
