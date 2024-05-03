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
    duration: 10000,
    closeSectionMessage: () => {
      console.log("closeSectionMessage");
    },
  },
};

export { sectionMessage };
