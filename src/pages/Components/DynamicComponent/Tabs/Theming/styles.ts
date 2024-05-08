import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledTokenInfoContainer = styled.div`
  > div {
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
    border-radius: 8px;
  }
`;

export { StyledTokenInfoContainer };
