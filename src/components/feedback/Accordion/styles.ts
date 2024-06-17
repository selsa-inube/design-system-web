import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { MdKeyboardArrowDown } from "react-icons/md";

const StyledAccordionContainer = styled.div`
  border: 1px solid
    ${({ theme }) => theme.palette?.neutral?.N40 || inube.palette.neutral.N40};
  border-radius: 8px;
  padding: 16px 20px;
`;

const StyledRotatingIcon = styled(MdKeyboardArrowDown)<{ $expanded: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${({ $expanded }) =>
    $expanded ? "rotate(180deg)" : "rotate(0deg)"};
  cursor: pointer;
`;

const SeparatorLine = styled.hr`
  width: calc(100% - 32px);
  margin: 8px 16px;
  height: 1px;
  padding: 0px;
  background-color: ${({ theme }) =>
    theme?.nav?.divider?.color || inube.nav.divider.color};
`;

export { StyledAccordionContainer, StyledRotatingIcon, SeparatorLine };
