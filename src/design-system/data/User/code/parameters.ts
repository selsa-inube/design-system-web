import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "userName",
    description:
      "Specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface",
    type: "string",
  },
  {
    nameProps: "client",
    description:
      "Indicates the name of the customer or company associated with the user",
    type: "string",
  },
  {
    nameProps: "size",
    description:
      "Determines the size of the user component in the interface. The avatar will always be visible, but the name and client will be visible according to the size of the component",
    type: "string: 'small' | 'large'",
  },
];
