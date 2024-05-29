import { Divider, IDivider } from "@inubekit/divider";
import { StyledDividerContainer } from "./styles";
import { Stack } from "@inubekit/stack";

const DividerController = (props: IDivider) => {
  return (
    <StyledDividerContainer>
      <Stack justifyContent="center" alignItems="center" height="150px">
        <Divider {...props} />
      </Stack>
    </StyledDividerContainer>
  );
};

export { DividerController };
