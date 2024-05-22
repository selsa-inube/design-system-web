import styled from "styled-components";

const StyledTableContainer = styled.div`
  width: 100%;
  & > div {
    border: none;
    & > table > tbody > tr {
      border-top: 16px solid transparent;
    }
  }
`;

const StyledTextfieldContainer = styled.div`
  & > div {
    width: auto;
  }
`;

const StyledSelectContainer = styled.div`
  & > div {
    position: absolute;
  }
`;

export {
  StyledTableContainer,
  StyledTextfieldContainer,
  StyledSelectContainer,
};
