import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface StyledContainerTextProps {
  isLightAppearance: boolean;
}

const StyledContainerText = styled.div<StyledContainerTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isLightAppearance }) =>
    isLightAppearance
      ? theme?.text?.dark?.content?.color?.regular ||
        inube.text.dark.content.color.regular
      : "unset"};
  width: 100%;

  & > p {
    width: 68vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { StyledContainerText };
