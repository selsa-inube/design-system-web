import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  max-width: 264px;
  max-height: 52px;
  height: 100%;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.tag?.dark?.normal?.background?.color ||
    inube.tag.dark.normal.background.color};
  & > figure:hover {
    cursor: pointer;
  }
`;

const StyledFieldSetComponentContainer = styled.div`
  & > fieldset {
    display: block;
    min-height: 150px;
  }
`;

const StyledSectionMessageWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 2;
`;

export {
  StyledFieldSetComponentContainer,
  StyledTag,
  StyledSectionMessageWrapper,
};
