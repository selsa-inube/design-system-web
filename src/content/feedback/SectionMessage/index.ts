import { SectionMessage } from "@inube/design-system";
import { MdWarning } from "react-icons/md";

const sectionMessage = {
  description: "This component uses a filled primary icon for all applications",
  example: SectionMessage,
  name: "SectionMessage",
  props: {
    title: "Title",
    description: "Description",
    icon: MdWarning,
    appearance: "primary",
    duration: 10000,
    closeSectionMessage: () => {
      console.log("closeSectionMessage");
    },
  },
  propTypes: {
    icon: {
      description: "The icon to be displayed in the section message.",
    },
    title: {
      description: "The title text of the section message.",
    },
    description: {
      description:
        "The description text of the section message. If the description is too long, it will be truncated to the MAX_DESCRIPTION_LENGTH.",
    },
    appearance: {
      description:
        "The appearance style of the section message and related components.",
      type: "ISectionMessageAppearance",
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
    },
    closeSectionMessage: {
      description:
        "Callback function that is called when the section message needs to be closed, either by user action or after the countdown.",
    },
  },
};

export { sectionMessage };