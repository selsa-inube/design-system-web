import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTokenInfoContainer = styled.div`
  > div {
    background-color: ${({ theme }) =>
      theme?.table?.action?.background || inube.table.action.background};
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
