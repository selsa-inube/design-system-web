import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

export const StyledLink = styled(Link)`
  max-width: 348px;
  height: 300px;
  padding: 24px;
  text-decoration: none;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${inube.palette.neutral.N0};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  & > div > div:first-child {
    background-color: ${inube.palette.neutral.N30};
  }
  &:hover {
    transform: scale(1.05);
  }
`;
