import styled from "styled-components";

const StyledTableContainer = styled.div`
  width: 100%;
  & > div {
    border: none;
    & > table {
      outline: none;
    }
    & > table > thead > tr > th:first-child {
      border-radius: 8px 0 0 0;
    }
    & > table > thead > tr > th:last-child {
      border-radius: 0 8px 0 0;
    }
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
    position: relative;
    & > ul {
      max-width: 300px;
      position: absolute;
      z-index: 2;
    }
  }
`;

export {
  StyledTableContainer,
  StyledTextfieldContainer,
  StyledSelectContainer,
};
