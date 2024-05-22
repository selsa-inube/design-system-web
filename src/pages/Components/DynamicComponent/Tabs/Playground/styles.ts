import styled from "styled-components";

const StyledTag = styled.div`
  max-width: 200px;
  & > div {
    display: flex;
    max-width: 200px;
    max-height: 52px;
    height: 100%;
    align-items: center;
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
