import { Text, IText } from "@inubekit/text";
import { StyledContainerText } from "./styles";

const TextController = (props: IText) => {
  const { appearance } = props;
  return (
    <StyledContainerText isLightAppearance={appearance === "light"}>
      <Text {...props} />
    </StyledContainerText>
  );
};

export { TextController };
