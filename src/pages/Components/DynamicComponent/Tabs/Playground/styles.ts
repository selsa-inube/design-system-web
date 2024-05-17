import styled from "styled-components";

const StyledTag = styled.div`
  > div {
    display: flex;
    align-items: center;
    max-width: 200px;
    max-height: 52px;
    width: 100%;
    height: 100%;
    padding: 6px;
    justify-content: center;
    cursor: pointer;
  }
`;

const StyledFieldSetComponentContainer = styled.div`
  & > fieldset {
    display: block;
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
