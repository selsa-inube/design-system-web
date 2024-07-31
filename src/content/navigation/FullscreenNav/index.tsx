import { FullscreenNav } from "@inubekit/fullscreennav";
import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
} from "react-icons/md";
import { inube } from "@inubekit/foundations";
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
    logoutPath: "/logout",
    logoutTitle: "logout",
  },
  propTypes: {
    portalId: {
      description:
        "The unique identifier for the HTML element used as a portal to render the FullscreenNav component. This is essential for ensuring the navigation component is rendered in the correct location in the DOM.",
      type: "string",
    },
    navigation: {
      description:
        "An object detailing the structure of the navigation menu. It should contain sections, each with a name and an array of links. Each link object must include an id, label, icon, and path, defining the navigation structure displayed within the FullscreenNav component.",
      type: "object",
    },
    logoutPath: {
      description:
        "The URL path that the user will be redirected to upon clicking the logout option. This path should point to the logout functionality of your application.",
      type: "string",
    },
    logoutTitle: {
      description:
        "The text label for the logout option displayed in the navigation menu. This helps users easily identify the logout function.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(
    inube.fullscreenNav,
    fullscreenNavTokensConfig,
  ),
};

export { fullscreenNav };
