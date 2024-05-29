import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledDividerContainer = styled.div`
  background-color: ${({ theme }) =>
    theme?.text?.dark?.content?.color?.regular ||
    inube.text.dark.content.color.regular};
  width: 100%;
`;

export { StyledDividerContainer };
