import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "selectedTab",
    description:
      "The state of the tabs-component shall be determined using the id-property to identify the selected tab",
    type: "string",
  },

  {
    nameProps: "tabs",
    description:
      "Shall be designed to accept an array of objects with a predetermined structure",
    type: "(object): { id: string; label: string; disabled: boolean, selected: boolean }",
  },
  {
    nameProps: "type",
    description:
      "Shall determine the way the tabs will display in order to avoid horizontal scrolling",
    type: "string: 'selected' | 'tabs'",
  },
  {
    nameProps: "onChange",
    description:
      "Attribute shall determine the behavior of the click event and should handle the state for the tabs-component",
    type: "function: (id: string) => void",
  },
];
