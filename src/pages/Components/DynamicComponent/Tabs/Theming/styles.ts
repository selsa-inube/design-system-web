import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledTokenInfoContainer = styled.div`
  > div {
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
    border-radius: 8px;
  }
`;

const StyledTableWrapper = styled.div`
  table {
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.color?.stroke?.divider?.regular ||
          inube.color.stroke.divider.regular};
    }

    tr:last-child {
      border-bottom: none;
    }

    thead {
      th {
        background-color: transparent;
        border-bottom: 1px solid
          ${({ theme }) =>
            theme.color?.stroke?.divider?.regular ||
            inube.color.stroke.divider.regular};
      }

      th:nth-last-child(-n + 2) {
        background-color: ${({ theme }) =>
          theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
      }
    }
  }
`;

const StyledSectionMessageWrapper = styled.div`
  & > div {
    display: flex;
    & > div > figure {
      display: none;
    }
  }
`;

export {
  StyledTokenInfoContainer,
  StyledTableWrapper,
  StyledSectionMessageWrapper,
};
