/* eslint-disable @typescript-eslint/no-explicit-any */
import { icon } from "./Icon";
import { avatar } from "./Avatar";

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
};

export { components };
