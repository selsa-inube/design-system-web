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
  description: "This component uses a filled primary icon for all applications",
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
      title="Avatar"
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
      description: "id of the portal element",
    },
    navigation: {
      description:
        "shall be designed to accept an array of objects with a predetermined structure, as specified below: Each object shall contain the following attributes",
    },
    logoutPath: {
      description: "path to the logout page",
      type: "input",
    },
    logoutTitle: {
      description: "title of the logout page",
      type: "input",
    },
  },
  tokens: buildTokenDescriptions(
    inube.fullscreenNav,
    fullscreenNavTokensConfig,
  ),
};

export { fullscreenNav };
