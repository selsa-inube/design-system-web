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
  description: "This component uses a filled primary icon for all applications",
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
        "shall be designed to accept an array of objects with a predetermined structure",
      type: "ITab[ ]",
    },
    selectedTab: {
      description:
        "The state of the tabs-component shall be determined using the id-property to identify the selected tab",
    },
    onChange: {
      description:
        "attribute shall determine the behavior of the click event and should handle the state for the tabs-component",
      type: "Event",
    },
    scroll: {
      description:
        "allows the component to determine whether it scrolls sideways",
      type: "boolean",
    },
  },
  tokens: buildTokenDescriptions(inube.tabs, tabsTokensConfig),
};

export { tabs };
