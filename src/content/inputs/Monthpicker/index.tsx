import { InputTokens } from "@inubekit/input";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { Monthpicker } from "@inubekit/monthpicker";

const monthpickerTokensConfig = {
  businessUnit: "inube",
  component: "monthpicker",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const monthpicker = {
  description:
    "The Monthpicker component is designed to provide users with a streamlined and intuitive way to select a month from a predefined list of options. This component is particularly useful in scenarios where users need to specify a month as part of a larger form or data entry process, such as selecting a month for a financial report, scheduling an event, or setting a reminder. The Monthpicker component supports various customization options, including localization of month names, display order, and the range of months that can be selected. By providing these options, the Monthpicker ensures flexibility and adaptability to different use cases and user preferences.",
  name: "Monthpicker",
  example: Monthpicker,
  frame: (
    <iframe
      src="https://codesandbox.io/embed/vtqtlr?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Monthpicker"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    start: 0,
    end: 11,
    locales: "es-ES",
    order: "asc",
    placeholder: "Meses",
    value: "",
  },
  propTypes: {
    start: {
      description:
        "The `start` prop defines the starting index of the months to display in the Monthpicker component. The index corresponds to the month of the year, where 0 represents January, 1 represents February, and so on, up to 11, which represents December. By setting this prop, you can control which months are shown to the user, allowing for scenarios where you might want to limit the selection to a specific time of year. For example, setting `start` to 3 would begin the month selection at April.",
      type: "number",
      defaultValue: 0,
    },
    end: {
      description:
        "The `end` prop defines the ending index of the months to display in the Monthpicker component. Similar to the `start` prop, the index corresponds to the month of the year, with 0 for January and 11 for December. By setting this prop, you can control the range of months that are selectable by the user. This is particularly useful for limiting the selection to specific months, such as a fiscal quarter or a particular season. For instance, setting `end` to 8 would stop the month selection at September.",
      type: "number",
      defaultValue: 11,
    },
    locales: {
      description:
        "The `locales` prop allows you to specify the locale that should be used for displaying the month names in the Monthpicker component. This prop accepts a locale string, such as 'en-US' for American English or 'es-ES' for Spanish in Spain. By setting this prop, the Monthpicker will display month names according to the specified locale's language and formatting conventions, making the component more accessible and user-friendly for international audiences.",
      type: "string",
      defaultValue: "es-ES",
    },
    order: {
      description:
        "The `order` prop controls the order in which the months are displayed in the Monthpicker component. The available options are `asc` for ascending order (January to December) and `desc` for descending order (December to January). This prop allows you to adjust the display based on the specific needs of your application. For instance, in a financial reporting tool where recent months might be more relevant, you could set the `order` to `desc` so that the latest months appear first in the list.",
      type: "IMonthpickerOrder",
      options: ["asc", "desc"],
      defaultValue: "asc",
    },
    placeholder: {
      description:
        "The `placeholder` prop allows you to define a text that will be displayed in the Monthpicker's input field when no month has been selected. This placeholder text provides a prompt or guidance to the user, indicating what action they need to take or what kind of input is expected. For example, setting the placeholder to 'Select a month' will show this text in the field until the user makes a selection.",
      type: "string",
    },
    value: {
      description:
        "The `value` prop represents the currently selected month in the Monthpicker component. This prop holds the month value as a string, such as 'January' or 'February', depending on the user's selection. The `value` prop is essential for both controlled and uncontrolled components, as it allows the Monthpicker to display the selected month and pass this information back to the parent component or form. The default value is an empty string, indicating no month is selected initially.",
      type: "string",
      defaultValue: "",
    },
    onChange: {
      description:
        "The `onChange` prop is a function that handles the change event when the user selects a different month in the Monthpicker component. This function receives the new month value as an argument, allowing you to perform any necessary actions, such as updating the state or triggering other logic in your application. Implementing the `onChange` function is crucial for ensuring that the Monthpicker interacts correctly with the rest of your application's form or data handling processes.",
      type: "function",
    },
  },

  tokens: buildTokenDescriptions(InputTokens, monthpickerTokensConfig),
};

export { monthpicker };
