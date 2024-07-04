import { Flag, IFlag } from "@inubekit/flag";
import { Stack } from "@inubekit/stack";
import { StyledContainerFlag } from "./styles";

const FlagController = (props: IFlag) => {
  return (
    <Stack alignItems="center" width="100%">
      <StyledContainerFlag>
        <Flag {...props} />
      </StyledContainerFlag>
    </Stack>
  );
};

export { FlagController };
