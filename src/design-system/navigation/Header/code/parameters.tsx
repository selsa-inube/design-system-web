import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "portalId",
    description: "id of the portal element",
    type: "string",
  },
  {
    nameProps: "logoURL",
    description:
      "prop accepts a component to be used as the logo in the header. This component can be an image, an icon, stylized text or any other visual element that represents the brand identity.",
    type: "string",
  },
  {
    nameProps: "userName",
    description: "Shall be the displayed username",
    type: "string",
  },
  {
    nameProps: "client",
    description: "Shall be the displayed username",
    type: "string",
  },
  {
    nameProps: "link",
    description: "Shall be the displayed username",
    type: "IBreadcrumbLinkProps",
  },

  {
    nameProps: "navigation",
    description:
      "(objects): shall be designed to accept an array of objects with a predetermined structure, as specified below: Each object shall contain the following attributes",
    type: "(Objects):{title: string; sections: { [key: string]: ISection} }",
  },
];
