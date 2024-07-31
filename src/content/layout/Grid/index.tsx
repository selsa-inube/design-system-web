import { GridController } from "./Controller/Grid.Controller";

const grid = {
  description:
    "The Grid component provides a flexible and customizable layout system, allowing you to arrange and align items within a structured grid layout.",
  example: GridController,
  name: "Grid",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/c4wnld?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Grid"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
      description: "Elements to be rendered inside the Grid.",
      type: "ReactElement",
    },
    templateColumns: {
      description:
        "Specifies the column structure and width distribution within the grid.",
      type: "input",
    },
    templateRows: {
      description:
        "Specifies the row structure and height distribution within the grid.",
      type: "input",
    },
    gap: {
      description:
        "Defines the spacing between grid items, both horizontally and vertically.",
      type: "input",
    },
    justifyItems: {
      description:
        "Aligns items along the horizontal axis within their grid cells.",
      type: "IGridJustifyItems",
      options: [
        { id: "center", label: "Center" },
        { id: "start", label: "Start" },
        { id: "end", label: "End" },
        { id: "flex-start", label: "Flex Start" },
        { id: "flex-end", label: "Flex End" },
        { id: "left", label: "Left" },
        { id: "right", label: "Right" },
        { id: "inherit", label: "Inherit" },
        { id: "initial", label: "Initial" },
        { id: "revert", label: "Revert" },
        { id: "unset", label: "Unset" },
        { id: "stretch", label: "Stretch" },
        { id: "normal", label: "Normal" },
        { id: "self-start", label: "Self Start" },
        { id: "self-end", label: "Self End" },
        { id: "baseline", label: "Baseline" },
        { id: "first baseline", label: "First Baseline" },
        { id: "last baseline", label: "Last Baseline" },
        { id: "legacy right", label: "Legacy Right" },
        { id: "legacy left", label: "Legacy Left" },
        { id: "legacy center", label: "Legacy Center" },
      ],
    },
    alignItems: {
      description:
        "Aligns items along the vertical axis within their grid cells.",
      type: "IGridAlignItems",
      options: [
        { id: "center", label: "Center" },
        { id: "start", label: "Start" },
        { id: "end", label: "End" },
        { id: "flex-start", label: "Flex Start" },
        { id: "flex-end", label: "Flex End" },
        { id: "self-start", label: "Self Start" },
        { id: "self-end", label: "Self End" },
        { id: "baseline", label: "Baseline" },
        { id: "first baseline", label: "First Baseline" },
        { id: "last baseline", label: "Last Baseline" },
        { id: "safe center", label: "Safe Center" },
        { id: "unsafe center", label: "Unsafe Center" },
        { id: "inherit", label: "Inherit" },
        { id: "initial", label: "Initial" },
        { id: "revert", label: "Revert" },
        { id: "revert-layer", label: "Revert Layer" },
        { id: "unset", label: "Unset" },
      ],
    },
    justifyContent: {
      description:
        "Aligns the grid as a whole along the horizontal axis relative to its container.",
      type: "IGridJustifyContent",
      options: [
        { id: "flex-start", label: "Flex Start" },
        { id: "flex-end", label: "Flex End" },
        { id: "center", label: "Center" },
        { id: "space-between", label: "Space Between" },
        { id: "space-around", label: "Space Around" },
        { id: "space-evenly", label: "Space Evenly" },
        { id: "start", label: "Start" },
        { id: "end", label: "End" },
        { id: "left", label: "Left" },
        { id: "right", label: "Right" },
        { id: "inherit", label: "Inherit" },
        { id: "initial", label: "Initial" },
        { id: "revert", label: "Revert" },
        { id: "unset", label: "Unset" },
        { id: "stretch", label: "Stretch" },
        { id: "normal", label: "Normal" },
      ],
    },
    alignContent: {
      description:
        "Aligns the content of the grid along the vertical axis relative to its container.",
      type: "IGridAlignContent",
      options: [
        { id: "baseline", label: "Baseline" },
        { id: "flex-start", label: "Flex Start" },
        { id: "flex-end", label: "Flex End" },
        { id: "center", label: "Center" },
        { id: "space-between", label: "Space Between" },
        { id: "space-around", label: "Space Around" },
        { id: "space-evenly", label: "Space Evenly" },
        { id: "start", label: "Start" },
        { id: "end", label: "End" },
        { id: "inherit", label: "Inherit" },
        { id: "initial", label: "Initial" },
        { id: "revert", label: "Revert" },
        { id: "unset", label: "Unset" },
        { id: "stretch", label: "Stretch" },
        { id: "normal", label: "Normal" },
      ],
    },
    autoColumns: {
      description:
        "Sets the default size for columns in the grid, allowing them to automatically adjust based on content.",
      type: "input",
    },
    autoRows: {
      description:
        "Sets the default size for rows in the grid, allowing them to automatically adjust based on content.",
      type: "input",
    },
    autoFlow: {
      description:
        "Specifies how elements should be placed in the grid when there is not enough space.",
      type: "IGridAutoFlow",
      options: [
        { id: "row", label: "Row" },
        { id: "column", label: "Column" },
        { id: "dense", label: "Dense" },
        { id: "row dense", label: "Row Dense" },
        { id: "column dense", label: "Column Dense" },
      ],
    },
    height: {
      description: "Specifies the height of the grid container.",
      type: "input",
    },
    width: {
      description: "Specifies the width of the grid container.",
      type: "input",
    },
    margin: {
      description: "Sets the outer margin around the grid container.",
      type: "input",
    },
    padding: {
      description: "Sets the inner padding within the grid container.",
      type: "input",
    },
  },
};

export { grid };
