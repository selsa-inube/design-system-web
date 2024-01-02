import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "logoutPath",
    description:
      "Is the path where the user is going to navigate when he wants to logout and is required",
    type: "string",
  },
  {
    nameProps: "logoutTitle",
    description: "The title de la seccion ",
    type: "string",
  },
  {
    nameProps: "navigation",
    description:
      "(objects): The primary object that will organize and store the requisite paths for the correct operation of the Nav component is forthcoming and is required",
    type: "(Objects):{title: string; sections: { [key: string]: ISection} }",
  },
];
