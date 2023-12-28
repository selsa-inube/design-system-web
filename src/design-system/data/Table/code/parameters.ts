import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "id",
    description: "Uniquely identifies the Table Component",
    type: "string",
  },
  {
    nameProps: "titles",
    description:
      "Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it’ll be the titles for the table, as specified below: Each object shall contain the following attributes",
    type: "ITitle[{id: string,  titleName: string;  priority: number;}]",
  },
  {
    nameProps: "actions",
    description:
      "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it’ll be the actions for the table, as specified below: Each object shall contain the following attributes",
    type: "IAction[id: string, actionName: string, content: (entry: IActions) => JSX.Element;]",
  },
  {
    nameProps: "entries",
    description:
      "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it'll be the entries for the table, as specified below: Each object shall contain the following attributes",
    type: "IAction[id: string, actionName: string, content: (entry: IActions) => JSX.Element;]",
  },
  {
    nameProps: "filter",
    description: "Shall be the filter that can be applied to the table",
    type: "string",
  },
  {
    nameProps: "pageLength",
    description:
      "Shall be the number of the entries that will be displayed on the table",
    type: "number",
  },
  {
    nameProps: "breakpoints",
    description:
      "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it'll be the breakPoints used for the table's responsive, as specified below: Each object shall contain the following attributes",
    type: "IBreakpoint[{breakpoint: string, totalColumns: number,}]",
  },
  {
    nameProps: "infoTitle",
    description: "Custom title for information that displays in modal",
    type: "string",
  },
  {
    nameProps: "actionsTitle",
    description: "Custom title for actions that displays in modal",
    type: "string",
  },
  {
    nameProps: "content",
    description: "Custom content for modal",
    type: "React.ReactElement;",
  },
];
