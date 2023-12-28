import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "appearance",
    description: "the base styling to apply to the icon",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "icon",
    description: "icon to be displayed inside the Icon component",
    type: "ReactNode",
  },
  {
    nameProps: "cursorHover",
    description: "whether the icon changes upon cursor hover",
    type: "boolean",
  },
  {
    nameProps: "parentHover",
    description: "whether the icon changes upon its parent hover",
    type: "boolean",
  },
  {
    nameProps: "disabled",
    description: "set if the icon is disabled",
    type: "boolean",
  },
  {
    nameProps: "spacing",
    description: "spacing around the icon",
    type: "string: 'wide', 'compact', 'none'",
  },
  {
    nameProps: "variant",
    description: "variant of the icon",
    type: "string: 'filled', 'outlined', 'none'",
  },

  {
    nameProps: "shape",
    description: "shape of the icon",
    type: "string: 'circle', 'rectangle'",
  },
  {
    nameProps: "size",
    description: "size of the icon in pixels",
    type: "string",
  },
  {
    nameProps: "onClick",
    description: "function to handle icon click",
    type: "(() => void)",
  },
];
