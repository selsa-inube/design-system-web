import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${inube.palette.neutral.N50};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 70px;
  color: ${inube.text.light.content.color.regular};
`;

export { StyledSquare };
