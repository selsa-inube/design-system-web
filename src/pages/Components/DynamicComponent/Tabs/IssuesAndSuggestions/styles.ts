import styled from "styled-components";

const StyledTag = styled.div`
  > div {
    max-width: 200px;
    max-height: 52px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 6px;
    justify-content: center;
  }
`;

const StyledTextareaContainer = styled.div`
  width: 100%;
  textarea {
    resize: none;
  }
`;

export { StyledTag, StyledTextareaContainer };
