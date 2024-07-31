import { TabsController } from "./Controller/Tabs.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const tabsTokensConfig = {
  businessUnit: "inube",
  component: "tabs",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
    { id: "reference", order: 7 },
  ],
};

const tabs = {
  description:
    "The Tabs component provides a way to switch between different views or sections within the same context. It displays a list of tab items, each representing a different view, allowing users to navigate through them.",
  example: TabsController,
  name: "Tabs",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/d2xvgv?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Tabs"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    tabs: [
      {
        id: "generalInformation",
        disabled: false,
        label: "General Information",
      },
      { id: "branches", disabled: false, label: "Branches" },
      { id: "projects", disabled: false, label: "Projects" },
      { id: "events", disabled: true, label: "Events" },
      { id: "aidBudget", disabled: false, label: "Aid budget units" },
      { id: "payroll", disabled: false, label: "Payroll" },
    ],
    selectedTab: "generalInformation",
    type: "tabs",
  },
  propTypes: {
    tabs: {
      description:
        "An array of tab objects, each containing properties like 'id', 'label', and 'disabled'. The 'id' is a unique identifier for each tab, 'label' is the text displayed on the tab, and 'disabled' determines whether the tab is clickable.",
      type: "ITab[]",
    },
    selectedTab: {
      description:
        "The 'id' of the currently selected tab. This property is used to identify and highlight the active tab.",
      type: "string",
    },
    onChange: {
      description:
        "Callback function that is triggered when a tab is clicked. It receives the 'id' of the clicked tab as an argument and should handle the state change for the active tab.",
      type: "function",
    },
    scroll: {
      description:
        "A boolean flag that, when set to true, enables horizontal scrolling for the tabs. This is useful for displaying a large number of tabs within a limited space.",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(inube.tabs, tabsTokensConfig),
};

export { tabs };
