import { Header } from "@inube/design-system";
import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
} from "react-icons/md";
import { Logo } from "./logo";

const header = {
  description: "This component uses a filled primary icon for all applications",
  example: Header,
  name: "Header",
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
    links: {
      documents: {
        id: "dataUpdate",
        label: "Data update",
        path: "/dataUpdate",
      },
    },
  },
};

export { header };
