import { Blanket } from "@inubekit/blanket";

const blanket = {
  description: "This component uses a filled primary icon for all applications",
  example: Blanket,
  name: "Blanket",
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

export { blanket };
