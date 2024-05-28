import { Text, IText } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { StyledContainerText } from "./styles";

const TextController = (props: IText) => {
  const { appearance } = props;
  return (
    <Stack justifyContent="center" alignItems="center" height="150px">
      <StyledContainerText isLightAppearance={appearance === "light"}>
        <Text {...props} />
      </StyledContainerText>
    </Stack>
  );
};

export { TextController };
