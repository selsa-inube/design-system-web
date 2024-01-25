import { IOptions, typesOptions } from "./type";

export const tabs = [
  {
    id: "generalInformation",
    disabled: false,
    label: "General Information",
  },
  {
    id: "branches",
    disabled: false,
    label: "Branches",
  },
  {
    id: "projects",
    disabled: false,
    label: "Projects",
  },
  {
    id: "events",
    disabled: true,
    label: "Events",
  },
  {
    id: "aidBudget",
    disabled: false,
    label: "Aid budget units",
  },
  {
    id: "payroll",
    disabled: false,
    label: "Payroll",
  },
];

export const options: IOptions[] = [
  {
    nameProps: "selectedTab",
    typeControl: "Textfield",
  },
  {
    nameProps: "type",
    typeControl: "Select",
    option: typesOptions.map((typeOption) => ({
      id: typeOption,
      label: typeOption,
      disabled: false,
    })),
  },
];
