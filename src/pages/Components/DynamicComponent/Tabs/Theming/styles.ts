import { TableTokens } from "@inubekit/table";
import styled from "styled-components";

const StyledTokenInfoContainer = styled.div`
  > div {
    background-color: ${({ theme }) =>
      theme?.table?.action?.background || TableTokens.action.background};
    border-radius: 8px;
  }
`;

const StyledTableWrapper = styled.div`
  table {
    user-select: none;
    tbody {
      tr > td > p:nth-last-child(-n + 2) {
        word-break: break-word;
      }
    }
    button,
    a {
      user-select: none;
    }
  }
`;

const StyledFlagWrapper = styled.div`
  & > div {
    display: flex;
    & > div > figure {
      display: none;
    }
  }
`;

export { StyledTokenInfoContainer, StyledTableWrapper, StyledFlagWrapper };
