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

const fullscreenNav = {
  description: "This component uses a filled primary icon for all applications",
  example: FullscreenNav,
  name: "FullscreenNav",
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
};

export { fullscreenNav };
