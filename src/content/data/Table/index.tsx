import { Table } from "@inubekit/table";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { inube } from "@inubekit/foundations";

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
    "The table component is used to show the user relevant data, in an organized and systematic way.",
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
      description: "Specifies the layout algorithm to be used for the table.",
      type: "ITableLayout",
      options: [
        { id: "auto", label: "auto" },
        { id: "fixed", label: "fixed" },
      ],
    },
    borderCollapse: {
      description: "Controls the table's border collapse behavior.",
      type: "ITableBorderCollapse",
      options: [
        { id: "collapse", label: "collapse" },
        { id: "separate", label: "separate" },
      ],
    },
    borderWidth: {
      description: "Defines the width of the table border.",
      type: "string",
    },
    borderStyle: {
      description: "Defines the style of the table border.",
      type: "ITableBorderStyle",
      options: [
        { id: "solid", label: "solid" },
        { id: "dashed", label: "dashed" },
      ],
    },
    children: {
      description: "The content to display inside the table.",
      type: "React.node",
    },
  },
  tokens: buildTokenDescriptions(inube.table, tableTokensConfig),
  dependencies: {},
};

export { table };
