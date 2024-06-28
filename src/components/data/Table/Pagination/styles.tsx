import { inube } from "@inubekit/foundations";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 24px;
  height: 24px;

  & svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  }
`;

export { StyledButton };
