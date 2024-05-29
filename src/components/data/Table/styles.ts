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
  table-layout: fixed;
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
  width: 101.33px;
  min-width: 101.33px;
  max-width: 344px;
  flex: 1;

  p {
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
  }
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  padding: 12px 16px;
  width: 101.33px;
  min-width: 101.33px;
  max-width: 344px;
  flex: 1;
`;

const StyledTd = styled.td<IStyledTd>`
  text-align: center;
  width: 101.33px;
  min-width: 101.33px;
  max-width: 344px;
  flex: 1;
  white-space: nowrap;
  p {
    padding: 12px 16px;
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
    text-wrap: wrap;
  }
  & > div > div {
    width: unset;
    & > div > figure {
      margin-left: -2rem;
    }
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
