import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "size",
    description: "sets the size of the skeleton icon component",
    type: "string",
  },
  {
    nameProps: "animated",
    description:
      "Toggles whether or not the skeleton component's animation is active",
    type: "boolean",
  },
];
