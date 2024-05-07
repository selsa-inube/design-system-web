import styled from "styled-components";

const StyledRoot = styled.div`
  & header {
    position: relative;
    z-index: 1;
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  // height: calc(100vh - 56px);
  padding: 32px 32px;
  // overflow-y: scroll;
`;

export { StyledRoot, StyledMain };
