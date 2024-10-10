import { Table, TableTokens } from "@inubekit/table";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const tableTokensConfig = {
  businessUnit: "inube",
  component: "table",
  block: "background",
  element: "color",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 6 },
  ],
};

const table = {
  description:
    "The table component is used to display data in a structured and organized format, making it easy for users to compare and analyze information.",
  example: Table,
  name: "Table",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/8qw8xl?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Table"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    tableLayout: "fixed",
    borderCollapse: "collapse",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  propTypes: {
    tableLayout: {
      description:
        "Determines the table's layout algorithm. 'fixed' sets a fixed width for all columns, whereas 'auto' adjusts columns based on content.",
      type: "ITableLayout",
      options: [
        { id: "auto", label: "Auto" },
        { id: "fixed", label: "Fixed" },
      ],
    },
    borderCollapse: {
      description:
        "Specifies whether the table's borders are collapsed into a single border or separated. 'collapse' merges borders, 'separate' keeps them distinct.",
      type: "ITableBorderCollapse",
      options: [
        { id: "collapse", label: "Collapse" },
        { id: "separate", label: "Separate" },
      ],
    },
    borderWidth: {
      description:
        "Sets the width of the table's border, defined in pixels or other valid CSS units.",
      type: "string",
    },
    borderStyle: {
      description:
        "Defines the style of the table's border. Options include 'solid' for a continuous line or 'dashed' for a dashed line.",
      type: "ITableBorderStyle",
      options: [
        { id: "solid", label: "Solid" },
        { id: "dashed", label: "Dashed" },
      ],
    },
    children: {
      description:
        "Specifies the content to be displayed within the table. This can include table rows, cells, headers, and more.",
      type: "React.ReactNode",
    },
  },
  tokens: buildTokenDescriptions(TableTokens, tableTokensConfig),
  dependencies: {},
};

export { table };
