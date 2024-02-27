import { Text } from "@inube/design-system";

const text = {
  description:
    "The Text component that allows the use of typographic tokens decoupled from HTML text tags such as h1, h2, ..., p, span, legend, figcaption, blockquote",
  example: Text,
  name: "Text",
  props: {
    children: "Title with the Text component",
    as: "h1",
    textAlign: "start",
    margin: "20px 22px 23px 24px",
    padding: "5px",
    appearance: "dark",
    type: "body",
    size: "large",
    disabled: false,
    cursorHover: true,
    ellipsis: false,
    parentHover: false,
  },
};

export { text };
