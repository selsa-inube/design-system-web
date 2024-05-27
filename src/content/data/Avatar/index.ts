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
  dependencies: {
    icon: {
      component: "<Icon />",
      description:
        "This component uses a filled primary icon for all applications. To change the appearance of 'Avatar' you must modify the token colors of the 'icon' component",
    },
  },
};

export { avatar };
