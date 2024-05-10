import { Avatar } from "@inube/design-system";

const avatar = {
  description: "This component uses a filled primary icon for all applications",
  example: Avatar,
  name: "Avatar",
  props: {},
  propTypes: {
    icon: {
      description: "Whether the icon changes upon cursor hover",
      type: "ReactElement",
      default: "MdPersonOutline",
    },
  },
};

export { avatar };
