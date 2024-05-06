import { GridController } from "./Controller/Grid.Controller";

const grid = {
  description: "This component uses a filled primary icon for all applications",
  example: GridController,
  name: "Grid",
  props: {
    templateColumns: "repeat(3, 1fr)",
    gap: "28px",
    templateRows: "auto",
    justifyItems: "start",
    alignItems: "start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    autoColumns: "auto",
    autoRows: "auto",
    autoFlow: "row",
    margin: "0px",
    padding: "0px",
    height: "auto",
    width: "auto",
  },
};

export { grid };
