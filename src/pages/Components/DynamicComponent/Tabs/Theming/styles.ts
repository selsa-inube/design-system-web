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
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid
        ${({ theme }) =>
          theme?.table?.border?.color || inube.table.border.color};
    }

    tr:last-child {
      border-bottom: none;
    }

    thead {
      th {
        background-color: transparent;
        border-bottom: 1px solid
          ${({ theme }) =>
            theme?.table?.border?.color || inube.table.border.color};
      }

      th:nth-last-child(-n + 2) {
        background-color: ${({ theme }) =>
          theme?.table?.action?.background || inube.table.action.background};
      }
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
