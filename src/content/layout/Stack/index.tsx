import { StackController } from "./Controller/Stack.Controller";

const stack = {
  description:
    "The Stack component arranges its children in a flexible layout, using properties like direction, wrapping, and alignment to create various UI layouts.",
  example: StackController,
  name: "Stack",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/cylxks?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Stack"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
      description:
        "This prop allows the Stack component to receive and render React nodes. These children elements are organized within the layout defined by the Stack's properties, enabling flexible content arrangement.",
    },
    wrap: {
      description:
        "Determines whether the container should wrap its children into multiple lines or columns. Options include 'nowrap' (default), 'wrap', and 'wrap-reverse', controlling the flex-wrap property and allowing the content to wrap as needed within the container.",
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
        "Defines the direction in which the elements are arranged within the Stack. Options include 'row', 'column', 'row-reverse', and 'column-reverse', which determine whether the children are laid out horizontally or vertically, and in which order.",
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
        "Defines the space between items in the container. It can specify both row and column gaps; for example, '16px 8px' sets a 16px gap between rows and an 8px gap between columns. This property helps in managing the spacing between children elements in the layout.",
      type: "input",
    },
    alignItems: {
      description:
        "Aligns children along the cross axis (vertical if direction is 'row', horizontal if direction is 'column'). Options include 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'normal', 'self-start', 'self-end', 'initial', 'revert', 'unset', 'start', and 'end'. It helps in controlling the alignment of items within the container based on their height or width.",
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
        "Aligns the flex container's lines within it when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Options include 'baseline', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'inherit', 'initial', 'revert', 'unset', 'stretch', and 'normal'.",
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
        "Defines the horizontal alignment of elements when the direction is row or the vertical alignment of elements when the direction is column. Options include 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right', 'inherit', 'initial', 'revert', 'unset', 'stretch', and 'normal'. This property affects the alignment of the entire grid in relation to its container.",
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
      description:
        "Controls the height of the Stack component, setting its vertical size. Accepts values in pixels or global CSS units.",
      type: "input",
    },
    width: {
      description:
        "Controls the width of the Stack component, setting its horizontal size. Accepts values in pixels or global CSS units.",
      type: "input",
    },
    margin: {
      description:
        "Sets the outer margin of the Stack component, defining space outside the component. Accepts values in pixels or global CSS units.",
      type: "input",
    },
    padding: {
      description:
        "Sets the inner padding of the Stack component, defining space inside the component's border. Accepts values in pixels or global CSS units.",
      type: "input",
    },
  },
};

export { stack };
