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
  propTypes: {
    children: {
      description: "Children elements placed inside the Grid.",
    },
    templateColumns: {
      description: "Defines the size and layout of the columns in the grid.",
    },
    templateRows: {
      description: "Defines the size and layout of the rows in the grid.",
    },
    gap: {
      description:
        "Controls the spacing between grid cells, both horizontally and vertically.",
    },
    justifyItems: {
      description:
        "Defines how items are aligned on the horizontal axis within each grid cell.",
      type: "IGridJustifyItems",
      options: [
        { id: "center", label: "center" },
        { id: "start", label: "start" },
        { id: "end", label: "end" },
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "left", label: "left" },
        { id: "right", label: "right" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
        { id: "stretch", label: "stretch" },
        { id: "normal", label: "normal" },
        { id: "self-start", label: "self-start" },
        { id: "self-end", label: "self-end" },
        { id: "baseline", label: "baseline" },
        { id: "first baseline", label: "first baseline" },
        { id: "last baseline", label: "last baseline" },
        { id: "legacy right", label: "legacy right" },
        { id: "legacy left", label: "legacy left" },
        { id: "legacy center", label: "legacy center" },
      ],
    },

    alignItems: {
      description:
        "Controls the vertical alignment of the elements within each grid cell.",
      type: "IGridAlignItems",
      options: [
        { id: "center", label: "center" },
        { id: "start", label: "start" },
        { id: "end", label: "end" },
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "self-start", label: "self-start" },
        { id: "self-end", label: "self-end" },
        { id: "baseline", label: "baseline" },
        { id: "first baseline", label: "first baseline" },
        { id: "last baseline", label: "last baseline" },
        { id: "safe center", label: "safe center" },
        { id: "unsafe center", label: "unsafe center" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "revert-layer", label: "revert-layer" },
        { id: "unset", label: "unset" },
      ],
    },

    justifyContent: {
      description:
        "This property affects the horizontal alignment of the entire grid in relation to its container.",
      type: "IGridJustifyContent",
      options: [
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "center", label: "center" },
        { id: "space-between", label: "space-between" },
        { id: "space-around", label: "space-around" },
        { id: "space-evenly", label: "space-evenly" },
        { id: "start", label: "start" },
        { id: "end", label: "end" },
        { id: "left", label: "left" },
        { id: "right", label: "right" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
        { id: "stretch", label: "stretch" },
        { id: "normal", label: "normal" },
      ],
    },

    alignContent: {
      description:
        "This property affects the vertical alignment of the grid content in relation to its container.",
      type: "IGridAlignContent",
      options: [
        { id: "baseline", label: "baseline" },
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "center", label: "center" },
        { id: "space-between", label: "space-between" },
        { id: "space-around", label: "space-around" },
        { id: "space-evenly", label: "space-evenly" },
        { id: "start", label: "start" },
        { id: "end", label: "end" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
        { id: "stretch", label: "stretch" },
        { id: "normal", label: "normal" },
      ],
    },

    autoColumns: {
      description:
        "Allows you to specify the automatic width of the grid columns. This means that the columns will automatically adjust according to the content.",
    },

    autoRows: {
      description:
        "Allows you to specify the automatic height of the grid columns. This means that the columns will automatically adjust according to the content.",
    },

    autoFlow: {
      description:
        "Controls how elements flow within the grid when there is not enough space in a row or column.",
      type: "IGridAutoFlow",
      options: [
        { id: "row", label: "row" },
        { id: "column", label: "column" },
        { id: "dense", label: "dense" },
        { id: "row dense", label: "row dense" },
        { id: "column dense", label: "column dense" },
      ],
    },

    height: {
      description: "Controls the height of the grid.",
    },

    width: {
      description: "Controls the width of the grid.",
    },

    margin: {
      description: "Sets the outer margin of the grid.",
    },

    padding: {
      description: "Sets the inner padding of the grid.",
    },
  },
};

export { grid };