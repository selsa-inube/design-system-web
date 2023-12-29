import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "size",
    description:
      "Different sizes that the component can have, according to the need",
    type: "string: 'small' | 'medium' | 'large'",
  },
  {
    nameProps: "appearance",
    description: "Colors used to identify the state of the component",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "transparent",
    description:
      "Indicates when the background of the spinner should have color",
    type: "boolean",
  },
];
