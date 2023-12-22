import styled, { css } from "styled-components";

export const StyledGeneralCode = {
  "background-color": "#f2f2f2",
  "border-radius": "5px",
};

const tdStyledGeneral = css`
  margin-bottom: 12px;
`;

export const StyledCode = styled.code`
  ${StyledGeneralCode}

  font-size: 20px;
`;

export const StyledCodeTd = styled.code`
  ${StyledGeneralCode}

  font-size: 12px;
  padding: 4px 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const StyledCaption = styled.caption`
  padding-bottom: 12px;
  margin-bottom: 12px;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
`;

export const StyledTbody = styled.tbody``;

export const StyledTh = styled.th`
  padding-bottom: 16px;
  text-align: left;
`;

export const StyledTr = styled.tr``;

export const StyledTd = styled.td`
  ${tdStyledGeneral}
`;

export const StyledTdTitle = styled.td`
  ${tdStyledGeneral}
  width: 150px;
`;
