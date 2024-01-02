import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "crumbs",
    description:
      "(array): An array of objects that contain the path, label, id, and isActive properties.",
    type: "[{id: string, label: string, path: string. isActive: boolean, size: string}]",
  },
];
