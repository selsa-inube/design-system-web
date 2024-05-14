import { AvatarController } from "./Controller/Avatar.Controller";

const avatar = {
  description: "This component uses a filled primary icon for all applications",
  example: AvatarController,
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
