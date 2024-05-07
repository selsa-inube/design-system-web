import { Stack, IStack } from "@inubekit/stack";
import { StyledSquare } from "./Stack.Controller.styles";

const StackController = (props: IStack) => {
  return (
    <Stack {...props}>
      {Array.isArray(props.children)
        ? props.children.map((item, index) => (
            <StyledSquare key={index}>{item}</StyledSquare>
          ))
        : props.children}
    </Stack>
  );
};

export { StackController };
