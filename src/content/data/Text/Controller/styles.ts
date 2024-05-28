import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface StyledContainerTextProps {
  isLightAppearance: boolean;
}

const StyledContainerText = styled.div<StyledContainerTextProps>`
  background-color: ${({ theme, isLightAppearance }) =>
    isLightAppearance
      ? theme?.text?.dark?.content?.color?.regular ||
        inube.text.dark.content.color.regular
      : "unset"};
`;

export { StyledContainerText };
