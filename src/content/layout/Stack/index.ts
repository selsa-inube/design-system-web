import { StackController } from "./Controller/Stack.Controller";

const stack = {
  description: "This component uses a filled primary icon for all applications",
  example: StackController,
  name: "Stack",
  props: {
    children: [...Array(6 + 1).keys()].slice(1),
    gap: "10px",
    wrap: "wrap",
    direction: "row",
    justifyContent: "unset",
    alignItems: "initial",
    alignContent: "unset",
    height: "100%",
    width: "100%",
    margin: "0px",
    padding: "0px 20px",
  },
};

export { stack };
