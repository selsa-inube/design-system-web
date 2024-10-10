import { inube } from "@inubekit/foundations";
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
  display: flex;
  width: 100%;
  max-width: 800px;
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme?.palette?.purple?.P50 || inube.palette.purple.P50};
`;

export { StyledTokenInfoContainer, StyledTableWrapper, StyledFlagWrapper };
