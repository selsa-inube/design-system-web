import { StackController } from "./Controller/Stack.Controller";

const stackItem = {
  description:
    "The StackItem component is used within a Stack to control the layout and alignment of individual items. It provides properties for flexbox alignment, growth, shrinkage, and order, allowing for flexible and responsive design.",
  example: StackController,
  name: "StackItem",
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
      title="StackItem"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    children: null,
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
  },
  propTypes: {
    children: {
      description:
        "This prop allows the StackItem component to receive and render any React nodes. The content placed inside StackItem will be arranged according to the flex properties defined, making it part of the flexible layout structure within the Stack.",
    },
    order: {
      description:
        "Specifies the order in which the StackItem appears within its parent Stack container. This property defines the visual order of the item, overriding the default order based on the source code structure. A lower order value places the item earlier in the layout, while a higher value places it later.",
      type: "number",
    },
    flexGrow: {
      description:
        "Defines the ability of the StackItem to grow relative to the rest of the flex items within the same container. A higher flexGrow value allows the item to take up more available space, making it a critical property for responsive design and dynamic layout adjustments.",
      type: "number",
    },
    flexShrink: {
      description:
        "Determines the ability of the StackItem to shrink when the parent container has less space than required by the items. A higher flexShrink value means the item will reduce in size more readily, allowing better control over how the layout adapts to different screen sizes.",
      type: "number",
    },
    flexBasis: {
      description:
        "Sets the initial main size of the StackItem before the remaining space is distributed according to the flex-grow and flex-shrink properties. It can be defined in absolute units (like pixels) or as a percentage of the container's space. This property is crucial for establishing the initial layout of the items within the Stack.",
      type: "string",
    },
    alignSelf: {
      description:
        "Specifies the alignment of the StackItem along the cross-axis within the Stack. This property overrides the align-items value set on the parent container for this specific item. Options include 'auto', 'flex-start', 'flex-end', 'center', 'baseline', and 'stretch', providing flexibility in aligning items individually within the container.",
      type: "IStackItemAlignSelfProperties",
      options: [
        { id: "auto", label: "auto" },
        { id: "flex-start", label: "flex-start" },
        { id: "flex-end", label: "flex-end" },
        { id: "center", label: "center" },
        { id: "baseline", label: "baseline" },
        { id: "stretch", label: "stretch" },
      ],
    },
  },
};

export { stackItem };
