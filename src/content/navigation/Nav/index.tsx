import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { NavController } from "./Controller/Nav.Controller";
import { NavTokens } from "@inubekit/nav";

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
  description:
    "The Nav component provides a versatile side navigation system, allowing users to navigate through different sections of an application. It supports nested links and an optional collapsible feature.",
  example: NavController,
  name: "Nav",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/2hd7vv?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Nav"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
    collapse: true,
  },
  propTypes: {
    navigation: {
      description:
        "An object defining the navigation structure. It contains a title for the navigation and sections, each with a name and a set of links. Each link object should include 'id', 'label', 'icon', and 'path'. This structure organizes the navigation and is essential for the Nav component's functionality.",
      type: "INavNavigation",
      required: true,
    },
    actions: {
      description:
        "An array of objects representing additional actions the user can perform from the navigation. Each action object should include an 'id', 'label', 'icon', and an 'action' function that defines the behavior when the action is triggered. These actions will be displayed at the bottom of the navigation panel.",
      type: "INavAction[ ]",
    },
    collapse: {
      description:
        "A boolean indicating whether the navigation sections should be collapsible. If true, sections can expand or collapse based on user interaction. This enhances the user experience by allowing them to manage the visibility of navigation sections.",
      type: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    footerLabel: {
      description:
        "A string that defines the text to be displayed in the footer of the navigation. By default, this is set to `inube - <current year>`, but can be customized as needed.",
      type: "string",
      options: [{ id: "currentYear", label: "`inube - <current year>`" }],
    },
    footerLogo: {
      description:
        "A string representing the path to an image that will be used as the logo in the footer of the navigation. This replaces the footer label text when provided. The image will be displayed centered at the bottom of the navigation.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(NavTokens, navTokensConfig),
};

export { nav };
