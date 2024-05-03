import { Tabs } from "@inube/design-system";

const tabs = {
  description: "This component uses a filled primary icon for all applications",
  example: Tabs,
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
};

export { tabs };
