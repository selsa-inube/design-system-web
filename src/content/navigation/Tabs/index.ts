import { TabsController } from "./Controller/Tabs.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const tabsTokensConfig = {
  businessUnit: "inube",
  component: "tabs",
  block: "content",
  element: "appearance",
  include: [
    "businessUnit",
    "component",
    "block",
    "element",
    "modifier",
    "token",
    "reference",
  ],
};

const tabs = {
  description: "This component uses a filled primary icon for all applications",
  example: TabsController,
  name: "Tabs",
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
    },
    scroll: {
      description:
        "allows the component to determine whether it scrolls sideways",
    },
  },
  tokens: buildTokenDescriptions(inube.tabs, tabsTokensConfig),
};

export { tabs };
