import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const StyledButton = styled.button`
  cursor: pointer;
  height: 36px;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  width: fit-content;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${inube.blanket.background.color};
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  color: ${inube.blanket.background.color};

  &:hover {
    background-color: ${inube.blanket.background.color};
  }
`;

export { StyledBackdropBlanket, StyledButton };
