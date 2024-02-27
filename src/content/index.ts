/* eslint-disable @typescript-eslint/no-explicit-any */
import { icon } from "./data/Icon";
import { avatar } from "./data/Avatar";
import { tag } from "./data/Tag";
import { text } from "./data/Text";
import { user } from "./data/User";

interface Components {
  [key: string]: {
    description: string;
    name: string;
    example: any;
    props: any;
  };
}

const components: Components = {
  icon,
  avatar,
  tag,
  text,
  user,
};

export { components };
