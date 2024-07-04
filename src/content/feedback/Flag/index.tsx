import { MdWarning } from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { FlagController } from "./Controller/Flag.Controller";

const flagTokensConfig = {
  businessUnit: "inube",
  component: "flag",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "block", order: 4 },
    { id: "element", order: 5 },
    { id: "token", order: 6 },
    { id: "reference", order: 7 },
  ],
};

const flag = {
  description: "This component uses a filled primary icon for all applications",
  example: FlagController,
  name: "Flag",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/9grh4r?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Flag"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    title: "Title",
    description: "Description",
    icon: MdWarning,
    appearance: "primary",
    duration: 10000,
    closeFlag: () => {
      console.log("closeFlag");
    },
  },
  propTypes: {
    icon: {
      description: "The icon to be displayed in the section message.",
    },
    title: {
      description: "The title text of the section message.",
      type: "input",
    },
    description: {
      description:
        "The description text of the section message. If the description is too long, it will be truncated to the MAX_DESCRIPTION_LENGTH.",
      type: "input",
    },
    appearance: {
      description:
        "The appearance style of the section message and related components.",
      type: "IFlagAppearance",
      options: [
        { id: "primary", label: "Primary" },
        { id: "success", label: "Success" },
        { id: "warning", label: "Warning" },
        { id: "danger", label: "Danger" },
        { id: "help", label: "Help" },
        { id: "dark", label: "Dark" },
        { id: "gray", label: "Gray" },
        { id: "light", label: "Light" },
      ],
    },
    duration: {
      description:
        "The duration for which the countdown bar runs. If provided, a countdown bar will appear.",
      type: "input",
    },
    closeFlag: {
      description:
        "Callback function that is called when the section message needs to be closed, either by user action or after the countdown.",
    },
  },
  tokens: buildTokenDescriptions(inube.sectionMessage, flagTokensConfig),
};

export { flag };
