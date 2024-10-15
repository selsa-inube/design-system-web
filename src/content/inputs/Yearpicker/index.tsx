import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { InputTokens } from "@inubekit/input";
import { Yearpicker } from "@inubekit/yearpicker";
import { Text } from "@inubekit/text";

const inputTokensConfig = {
  businessUnit: "inube",
  component: "input",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "modifier", order: 5 },
    { id: "token", order: 6 },
  ],
};

const yearpicker = {
  description:
    "The Yearpicker component allows users to select a year from a list of options, providing a dropdown interface for year selection.",
  example: Yearpicker,
  name: "Yearpicker",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/m8qfmz?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Yearpicker"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    start: 2000,
    end: new Date().getFullYear(),
    order: "desc",
    placeholder: "Select a year",
    value: "",
  },
  propTypes: {
    start: {
      description:
        "The starting year for the dropdown options. Defines the earliest year available for selection.",
      type: "number",
      table: {
        defaultValue: { summary: 2000 },
      },
    },
    end: {
      description:
        "The ending year for the dropdown options. Defines the latest year available for selection.",
      type: "number",
      table: {
        defaultValue: { summary: new Date().getFullYear() },
      },
    },
    order: {
      description: (
        <>
          <Text appearance="gray" size="medium">
            Controls the order in which the years are displayed in the dropdown.
            Available options include:
          </Text>
          <ul>
            <li>
              <strong>asc</strong>: Years are displayed in ascending order
              (e.g., 2000, 2001, 2002, ...).
            </li>
            <li>
              <strong>desc</strong>: Years are displayed in descending order
              (e.g., 2023, 2022, 2021, ...).
            </li>
          </ul>
        </>
      ),
      type: "IYearpickerOrder",
      options: [
        { id: "asc", label: "Ascending" },
        { id: "desc", label: "Descending" },
      ],
      table: {
        defaultValue: { summary: "desc" },
      },
    },
    onChange: {
      description:
        "A function triggered when the selected year changes. It receives the `name` and `value` as parameters to handle the new selection.",
      type: "(name: string, value: string) => void",
    },
    placeholder: {
      description:
        "A placeholder text displayed inside the year picker before any selection is made. Helps guide the user on what action to take.",
      type: "string",
    },
    value: {
      description:
        "The currently selected year value. Can be either controlled externally or internally by the component.",
      type: "string",
    },
  },
  tokens: buildTokenDescriptions(InputTokens, inputTokensConfig),
};

export { yearpicker };
