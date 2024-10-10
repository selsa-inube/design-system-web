import { MdLogout } from "react-icons/md";
import { Menu, MenuTokens } from "@inubekit/menu";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const menuTokensConfig = {
  businessUnit: "inube",
  component: "menu",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const menu = {
  description:
    "The Menu component is a versatile and customizable navigation element designed to display a structured list of items, typically used for user navigation or action selection within an application. It serves as a container for various sub-components such as MenuUser and MenuSection, which together create a cohesive and intuitive user interface.",
  example: Menu,
  name: "Menu",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/vjt5m8?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Menu"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    userName: "Name",
    businessUnit: "Business Unit",
    spacing: "wide",
    sections: [
      {
        links: [
          {
            title: "Logout",
            path: "/",
            iconBefore: <MdLogout />,
          },
        ],
        divider: true,
      },
    ],
    avatar: true,
  },
  propTypes: {
    userName: {
      description:
        "The name of the user, represented as a string. This name will be displayed prominently in the MenuUser component, serving as the identifier for the user within the interface. This prop is required for the proper display of the user's identity.",
    },
    sections: {
      description:
        "An array of section objects that define the different menu sections to be displayed in the MenuSection component. Each object in the array represents a specific section, containing details such as the section title, associated actions, and other relevant information. This prop is essential for rendering the menu structure.",
    },
    businessUnit: {
      description:
        "A string that specifies the business unit to which the user belongs. This information is displayed alongside the user's name in the MenuUser component, providing additional context about the user's organizational affiliation. This prop is optional, and if not provided, the MenuUser component will render without the business unit information.",
    },
    avatar: {
      description:
        "A boolean value that determines whether an avatar (a graphical representation of the user, typically a profile picture) should be displayed next to the user's name in the MenuUser component. If set to true, the avatar will be shown; if false or omitted, no avatar will be displayed. This prop is optional and can be used to customize the user's visual representation in the menu.",
    },
    spacing: {
      description:
        "Specifies the type of spacing to be applied between items in the MenuSection component. This prop accepts values of type MenuItemSpacingType, allowing for different spacing configurations based on the provided options. This customization is optional and can enhance the visual separation of menu items according to design requirements.",
      type: "menuItemSpacing",
    },
  },
  tokens: buildTokenDescriptions(MenuTokens, menuTokensConfig),
};

export { menu };
