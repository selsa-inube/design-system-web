import { StackController } from "./Controller/Stack.Controller";

const stack = {
  description: "This component uses a filled primary icon for all applications",
  example: StackController,
  name: "Stack",
  props: {
    children: [...Array(6 + 1).keys()].slice(1),
    gap: "10px",
    wrap: "wrap",
    direction: "row",
    justifyContent: "unset",
    alignItems: "initial",
    alignContent: "unset",
    height: "100%",
    width: "100%",
    margin: "0px",
    padding: "0px",
  },
  propTypes: {
    children: {
      description: "Children elements placed inside the Grid.",
    },
    wrap: {
      description:
        "Indicates whether the container should use more than one row/column to organize its children.",
      type: "IStackWrapControl",
      options: [
        { id: "wrap", label: "wrap" },
        { id: "nowrap", label: "nowrap" },
        { id: "wrap-reverse", label: "wrap-reverse" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
      ],
    },
    direction: {
      description:
        "Defines if the elements will be organized in a row or column manner.",
      type: "IStackDirectionAlignment",
      options: [
        { id: "row", label: "row" },
        { id: "column", label: "column" },
        { id: "row-reverse", label: "row-reverse" },
        { id: "column-reverse", label: "column-reverse" },
        { id: "inherit", label: "inherit" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
      ],
    },
    gap: {
      description:
        "Controls the spacing between grid cells, both horizontally and vertically.",
    },
    alignItems: {
      description:
        "Controls the vertical alignment of the elements within each grid cell.",
      type: "IStackAlignItem",
      options: [
        { id: "baseline", label: "baseline" },
        { id: "normal", label: "normal" },
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "center", label: "center" },
        { id: "stretch", label: "stretch" },
        { id: "self-start", label: "self-start" },
        { id: "self-end", label: "self-end" },
        { id: "initial", label: "initial" },
        { id: "revert", label: "revert" },
        { id: "unset", label: "unset" },
        { id: "start", label: "start" },
        { id: "end", label: "end" },
      ],
    },

    alignContent: {
      description:
        "This property affects the vertical alignment of the grid content in relation to its container.",
      type: "IStackAlignContent",
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

    justifyContent: {
      description:
        "This property affects the horizontal alignment of the entire grid in relation to its container.",
      type: "IStackJustifyContent",
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

export { stack };
