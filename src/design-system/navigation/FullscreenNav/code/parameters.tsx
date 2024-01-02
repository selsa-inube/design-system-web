export const parameters = [
  {
    nameProps: "portalId",
    description: "id of the portal element",
    type: "string",
  },

  {
    nameProps: "logoutPath",
    description: "Path to the logout page",
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
      "(objects): shall be designed to accept an array of objects with a predetermined structure, as specified below: Each object shall contain the following attributes",
    type: "(Objects):{title: string; sections: { [key: string]: ISection} }",
  },
];
