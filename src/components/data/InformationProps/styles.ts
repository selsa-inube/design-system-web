import styled, { css } from "styled-components";

const StyledGeneralCode = {
  "background-color": "#f2f2f2",
  "border-radius": "5px",
};

const tdStyledGeneral = css`
  margin-bottom: 12px;
`;

const StyledCode = styled.code`
  ${StyledGeneralCode}
  font-size: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const StyledCaption = styled.caption`
  padding-bottom: 12px;
  margin-bottom: 12px;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
`;

const StyledTbody = styled.tbody``;

const StyledTh = styled.th`
  padding-bottom: 16px;
  text-align: left;
`;

const StyledTr = styled.tr`
  padding-bottom: 4px;
  padding-top: 4px;
`;

const StyledTd = styled.td`
  ${tdStyledGeneral}
`;

const StyledTdTitle = styled.td`
  ${tdStyledGeneral}
  width: 150px;
`;

export {
  StyledGeneralCode,
  StyledCode,
  StyledTable,
  StyledCaption,
  StyledTbody,
  StyledTh,
  StyledTr,
  StyledTd,
  StyledTdTitle,
};
