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
    "table-tableLayout": {
      description:
        "(tableLayout) Determines the table's layout algorithm. 'fixed' sets a fixed width for all columns, whereas 'auto' adjusts columns based on content.",
      type: "ITableLayout",
      options: [
        { id: "auto", label: "Auto" },
        { id: "fixed", label: "Fixed" },
      ],
    },
    "table-borderCollapse": {
      description:
        "(borderCollapse) Specifies whether the table's borders are collapsed into a single border or separated.",
      type: "ITableBorderCollapse",
      options: [
        { id: "collapse", label: "Collapse" },
        { id: "separate", label: "Separate" },
      ],
    },
    "table-borderWidth": {
      description:
        "(borderWidth) Sets the width of the table's border, defined in pixels or other valid CSS units.",
      type: "string",
    },
    "table-borderStyle": {
      description: "(borderStyle) Defines the style of the table's border.",
      type: "ITableBorderStyle",
      options: [
        { id: "solid", label: "Solid" },
        { id: "dashed", label: "Dashed" },
      ],
    },
    "table-children": {
      description:
        "(children) Specifies the content to be displayed within the table.",
      type: "React.ReactNode",
    },
    "td-appearance": {
      description:
        "(appearance) Controls the appearance of the table cell, like its background and text style.",
      type: "ITdAppearance",
      options: ["light", "dark"],
    },
    "td-align": {
      description:
        "(align) Defines the alignment of the content inside the table cell.",
      type: "ITdAlignContent",
      options: ["left", "center", "right"],
    },
    "td-checked": {
      description:
        "(checked) Used when the table cell contains a toggle or checkbox, indicating if it's checked.",
      type: "boolean",
    },
    "td-type": {
      description:
        "(type) Determines the type of content inside the table cell.",
      type: "ITdType",
      options: ["text", "icon", "toggle", "custom"],
    },
    "tr-border": {
      description: "(border) Specifies the border style of the row.",
      type: "IBorder",
      options: [
        { id: "none", label: "None" },
        { id: "top", label: "Top" },
        { id: "bottom", label: "Bottom" },
        { id: "complete", label: "Complete" },
      ],
    },
    "tr-borderDashed": {
      description:
        "(borderDashed) If true, the border will be rendered as dashed instead of solid.",
      type: "boolean",
    },
    "tr-zebra": {
      description: "(zebra) Enables zebra striping for the row.",
      type: "boolean",
    },
    "th-action": {
      description:
        "(action) Defines if the header cell is intended for action-based content.",
      type: "boolean",
    },
    "th-align": {
      description: "(align) Controls the alignment of the header cell content.",
      type: "IThAlignContent",
      options: ["left", "center", "right"],
    },
    "caption-children": {
      description:
        "(children) Content to be displayed inside the Caption component, typically text.",
      type: "React.ReactNode",
    },
    "col-span": {
      description:
        "(span) Defines the number of columns a column element should span in the table layout.",
      type: "number",
    },
    "colgroup-children": {
      description:
        "(children) Defines the child columns that are grouped within the Colgroup component.",
      type: "React.ReactNode",
    },
    "tbody-children": {
      description:
        "(children) Defines the rows and cells that are grouped inside the Tbody component.",
      type: "React.ReactNode",
    },
    "tfoot-children": {
      description:
        "(children) Defines the footer content that is placed inside the Tfoot component.",
      type: "React.ReactNode",
    },
    "thead-children": {
      description:
        "(children) Defines the header row(s) and content that is placed inside the Thead component.",
      type: "React.ReactNode",
    },
    "pagination-firstEntryInPage": {
      description:
        "(firstEntryInPage) The first entry number displayed on the current page of the table.",
      type: "number",
    },
    "pagination-lastEntryInPage": {
      description:
        "(lastEntryInPage) The last entry number displayed on the current page of the table.",
      type: "number",
    },
    "pagination-totalRecords": {
      description:
        "(totalRecords) The total number of records in the dataset being paginated.",
      type: "number",
    },
    "pagination-handleStartPage": {
      description:
        "(handleStartPage) Function to handle navigation to the first page of the dataset.",
      type: "() => void",
    },
    "pagination-handlePrevPage": {
      description:
        "(handlePrevPage) Function to handle navigation to the previous page of the dataset.",
      type: "() => void",
    },
    "pagination-handleNextPage": {
      description:
        "(handleNextPage) Function to handle navigation to the next page of the dataset.",
      type: "() => void",
    },
    "pagination-handleEndPage": {
      description:
        "(handleEndPage) Function to handle navigation to the last page of the dataset.",
      type: "() => void",
    },
  },
  tokens: buildTokenDescriptions(TableTokens, tableTokensConfig),
  dependencies: {},
};

export { table };
