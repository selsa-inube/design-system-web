import styled from "styled-components";

const StyledRoot = styled.div`
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
  padding: 32px 64px;
`;

const StyledNavContainer = styled.div`
  & > div > nav {
    position: relative;
    overflow-y: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
    scroll-behavior: smooth;
    transition: overflow-y 0.3s ease-in-out;
  }

  & > div > nav::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  & > div > nav::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 8px;
  }

  & > div > nav:hover {
    overflow-y: scroll;
  }

  & > div:hover > div::-webkit-scrollbar,
  & > div:hover > div::-webkit-scrollbar-thumb {
    opacity: 1;
  }

  & > div > div::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export { StyledNavContainer, StyledRoot, StyledMain };
