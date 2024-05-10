import styled from "styled-components";

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const StyledBlanketContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 102px;
  & > div {
    position: absolute;
  }
`;

export { StyledBackdropBlanket, StyledBlanketContainer };
