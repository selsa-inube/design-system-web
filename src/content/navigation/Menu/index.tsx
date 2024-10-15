import { MdLogout } from "react-icons/md";
import { Menu, MenuTokens } from "@inubekit/menu";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Text } from "@inubekit/text";

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
      type: "string",
    },
    sections: {
      description:
        "An array of section objects that define the different menu sections to be displayed in the MenuSection component. Each object in the array represents a specific section, containing details such as the section title, associated actions, and other relevant information. This prop is essential for rendering the menu structure.",
      type: "Array<IMenuSection>",
    },
    businessUnit: {
      description:
        "A string that specifies the business unit to which the user belongs. This information is displayed alongside the user's name in the MenuUser component, providing additional context about the user's organizational affiliation. This prop is optional, and if not provided, the MenuUser component will render without the business unit information.",
      type: "string",
    },
    avatar: {
      description:
        "A boolean value that determines whether an avatar (a graphical representation of the user, typically a profile picture) should be displayed next to the user's name in the MenuUser component. If set to true, the avatar will be shown; if false or omitted, no avatar will be displayed. This prop is optional and can be used to customize the user's visual representation in the menu.",
      type: "boolean",
    },
    spacing: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Specifies the type of spacing to be applied between items in the MenuSection component. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: Provides larger gaps between items for more
              open layouts.
            </li>
            <li>
              <strong>Compact</strong>: Reduces spacing between items, useful
              for denser content areas.
            </li>
          </ul>
        </>
      ),
      type: "MenuItemSpacingType",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    "menuAction-title": {
      description: "(title) The main title for the MenuAction component.",
      type: "string",
    },
    "menuAction-description": {
      description:
        "(description) A secondary descriptive text displayed below the title in the MenuAction component.",
      type: "string",
    },
    "menuAction-spacing": {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the spacing between elements within the MenuAction component. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: Provides more space between the action
              items, allowing for more readability and separation.
            </li>
            <li>
              <strong>Narrow</strong>: Reduces the space between action items,
              making the layout more compact."
            </li>
          </ul>
        </>
      ),
      type: "MenuActionSpacingType",
      options: [
        { id: "wide", label: "Wide" },
        { id: "narrow", label: "Narrow" },
      ],
    },
    "menuAction-iconBefore": {
      description:
        "(iconBefore) An optional icon element displayed before the title.",
      type: "React.JSX.Element",
    },
    "menuAction-iconAfter": {
      description:
        "(iconAfter) An optional icon element displayed after the title.",
      type: "React.JSX.Element",
    },
    "menuAction-disabled": {
      description:
        "(disabled) A boolean flag that disables the MenuAction, preventing user interaction.",
      type: "boolean",
    },
    "menuAction-action": {
      description:
        "(action) A function to be executed when the MenuAction component is clicked.",
      type: "() => void",
    },
    "menuHeading-title": {
      description:
        "(title) The title text for the MenuHeading component, usually used as a section header.",
      type: "string",
    },
    "menuLink-title": {
      description: "(title) The main title for the MenuLink component.",
      type: "string",
    },
    "menuLink-description": {
      description:
        "(description) A secondary descriptive text displayed below the title in the MenuLink component.",
      type: "string",
    },
    "menuLink-spacing": {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the spacing between elements within the MenuLink component. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: Provides more space between the links for
              better readability.
            </li>
            <li>
              <strong>Compact</strong>: Reduces the space between the links,
              making the layout more compact."
            </li>
          </ul>
        </>
      ),
      type: "MenuLinkSpacingType",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    "menuLink-iconBefore": {
      description:
        "(iconBefore) An optional icon element displayed before the title.",
      type: "React.JSX.Element",
    },
    "menuLink-iconAfter": {
      description:
        "(iconAfter) An optional icon element displayed after the title.",
      type: "React.JSX.Element",
    },
    "menuLink-disabled": {
      description:
        "(disabled) A boolean flag that disables the MenuLink, preventing user interaction.",
      type: "boolean",
    },
    "menuLink-path": {
      description:
        "(path) The URL path that the MenuLink navigates to when clicked.",
      type: "string",
    },
    "menuLink-action": {
      description:
        "(action) A function to be executed when the MenuLink component is clicked.",
      type: "() => void",
    },
    "menuSection-title": {
      description:
        "(title) The title for the MenuSection, typically displayed at the top of the section.",
      type: "string",
    },
    "menuSection-children": {
      description:
        "(children) The content of the MenuSection, typically a set of MenuActions or MenuLinks.",
      type: "React.ReactNode",
    },
    "menuSection-divider": {
      description:
        "(divider) A boolean flag that adds a divider between sections in the menu.",
      type: "boolean",
    },
    "menuSection-spacing": {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Defines the spacing between items within the MenuSection. Available options include:"
          />
          <ul>
            <li>
              <strong>Wide</strong>: Provides more space between the section
              items.
            </li>
            <li>
              <strong>Compact</strong>: Reduces the space for a denser layout."
            </li>
          </ul>
        </>
      ),
      type: "string",
      options: [
        { id: "wide", label: "Wide" },
        { id: "compact", label: "Compact" },
      ],
    },
    "menuUser-userName": {
      description:
        "(userName) The name of the user displayed in the MenuUser component.",
      type: "string",
    },
    "menuUser-businessUnit": {
      description:
        "(businessUnit) The business unit to which the user belongs, displayed in the MenuUser component.",
      type: "string",
    },
    "menuUser-avatar": {
      description:
        "(avatar) A boolean that determines whether the user's avatar is displayed in the MenuUser component.",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(MenuTokens, menuTokensConfig),
};

export { menu };
