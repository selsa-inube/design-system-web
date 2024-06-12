import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & header {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 518px) {
    width: fit-content;
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  padding: 64px;
  flex-grow: 1;
  height: calc(100vh - 53px);
  overflow-y: auto;
`;

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 53px);
  overflow-y: auto;

  & > nav {
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
    scroll-behavior: smooth;
    transition: overflow-y 0.3s ease-in-out;

    & > div {
      height: 100%;
    }
  }

  & > nav::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  & > nav::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 8px;
  }

  & > nav:hover::-webkit-scrollbar,
  & > nav:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }

  & > nav::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export { StyledNavContainer, StyledRoot, StyledMain };
