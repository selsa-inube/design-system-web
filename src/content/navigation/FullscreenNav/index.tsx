import { FullscreenNav, FullscreenNavTokens } from "@inubekit/fullscreennav";
import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
} from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const fullscreenNavTokensConfig = {
  businessUnit: "inube",
  component: "fullscreenNav",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const fullscreenNav = {
  description:
    "The FullscreenNav component provides a comprehensive and immersive navigation experience, suitable for displaying a detailed menu or dashboard in a full-screen layout. It is particularly useful for applications requiring a rich and expansive navigation interface.",
  example: FullscreenNav,
  name: "FullscreenNav",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/7swgmz?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="FullscreenNav"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    portalId: "portals",
    navigation: {
      title: "MENU",
      sections: {
        administrative: {
          name: "Administrative",
          links: {
            privileges: {
              id: "privileges",
              label: "Privileges",
              icon: MdVpnKey,
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
              icon: MdContacts,
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
  },
  propTypes: {
    portalId: {
      description:
        "The unique identifier of the HTML element used as a portal to render the FullscreenNav component. This ID helps ensure the component is rendered in the appropriate DOM location.",
      type: "string",
      required: true,
    },
    navigation: {
      description:
        "An object that defines the structure of the navigation, including sections, each with a name and a set of links. Each link object must include an id, label, icon, and path to properly set up the navigation menu in the FullscreenNav component.",
      type: "IFNavigation",
      required: true,
    },
    actions: {
      description:
        "An optional array of action objects that define additional functions or links for the navigation. Each action object should include an id, label, icon, and an action function.",
      type: "INavAction[ ]",
    },
    footerLabel: {
      description:
        "A string that defines the text displayed at the bottom of the fullscreen navigation. By default, it is '©2024 - Inube', but it can be customized.",
      type: "string",
    },
    footerLogo: {
      description:
        "A string representing the path to an image used as the logo in the footer. If provided, this logo will replace the footerLabel text.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(
    FullscreenNavTokens,
    fullscreenNavTokensConfig,
  ),
};

export { fullscreenNav };
