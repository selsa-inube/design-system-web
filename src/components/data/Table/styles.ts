import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledTd {
  $withactions?: string;
}

interface IStyledTable {
  colsSameWidth?: boolean;
}

interface IStyledTr {
  $islasttr?: string;
}

interface IStyledThTitle {
  $countcolumns: number;
  colsSameWidth?: boolean;
  $withactions?: string;
}

const StyledTableContainer = styled.div`
  border-radius: 8px;
  border: solid 1px
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  overflow: hidden;
  width: 100%;
`;

const StyledTable = styled.table<IStyledTable>`
  outline: solid 1px
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: ${({ colsSameWidth }) => (colsSameWidth ? "fixed" : "auto")};
  width: 100%;
  border: none;
`;

const StyledThead = styled.thead`
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

const StyledTbody = styled.tbody`
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

const StyledTr = styled.tr<IStyledTr>`
  height: 40px;
`;

const StyledThTitle = styled.th<IStyledThTitle>`
  background-color: ${({ theme }) =>
    theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  padding: 12px 16px;
  min-width: ${({ $countcolumns, colsSameWidth }) =>
    colsSameWidth ? `${100 / $countcolumns}%` : "auto"};

  p {
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
  }
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  width: 80px;
  padding: 12px 0px;
`;

const StyledTd = styled.td<IStyledTd>`
  text-align: center;
  max-width: 310px;
  white-space: nowrap;

  p {
    padding: 12px 16px;
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
  }
`;

export {
  StyledTable,
  StyledTableContainer,
  StyledTbody,
  StyledTd,
  StyledThAction,
  StyledThTitle,
  StyledThead,
  StyledTr,
};
