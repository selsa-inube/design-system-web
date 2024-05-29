import { DividerController } from "./Controller/Divider.Controller";

const divider = {
  description:
    "Element that helps separate pieces of content into groups, sections, options or parts, in a clear and defined way.",
  example: DividerController,
  name: "Divider",
  props: {
    dashed: false,
  },
  propTypes: {
    dashed: {
      description:
        "It determines if the divider will be dashed or not. If not provided, the divider will be solid.",
    },
  },
};

export { divider };
