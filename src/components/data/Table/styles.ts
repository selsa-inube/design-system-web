import styled from "styled-components";
import { inube } from "@inubekit/foundations";

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
    ${({ theme }) => theme?.table?.border?.color || inube.table.border.color};
  //overflow: hidden;
  width: 100%;
`;

const StyledTable = styled.table<IStyledTable>`
  outline: solid 1px
    ${({ theme }) => theme?.table?.border?.color || inube.table.border.color};
  box-sizing: border-box;
  border-radius: 8px;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  border: none;
`;

const StyledThead = styled.thead`
  background-color: ${({ theme }) =>
    theme?.table?.heading?.background || inube.table.heading.background};
`;

const StyledTbody = styled.tbody`
  background-color: ${({ theme }) =>
    theme?.table?.row?.background?.regular ||
    inube.table.row.background.regular};
`;

const StyledTr = styled.tr<IStyledTr>`
  height: 40px;
`;

const StyledThTitle = styled.th<IStyledThTitle>`
  background-color: ${({ theme }) =>
    theme?.table?.heading?.background || inube.table.heading.background};
  padding: 12px 16px;
  flex: 1;

  p {
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
  }
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme?.table?.action?.background || inube.table.action.background};
  padding: 12px 16px;
  flex: 1;
`;

const StyledTd = styled.td<IStyledTd>`
  text-align: center;
  flex: 1;
  white-space: nowrap;
  p {
    padding: 12px 16px;
    text-align: ${({ $withactions }) => ($withactions ? "left" : "center")};
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    word-wrap: break-word;
    box-sizing: border-box;
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
