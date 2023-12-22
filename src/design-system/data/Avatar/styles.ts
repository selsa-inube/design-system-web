import styled from "styled-components";

export const StyledCode = styled.code`
  width: 100%;
  background-color: #f2f2f2;
  overflow-x: auto;
  white-space: pre;
  line-height: 2.5;
  font-family: SFMono-Medium, "SF Mono", "Segoe UI Mono", "Roboto Mono",
    "Ubuntu Mono", Menlo, Consolas, Courier, monospace;
  font-weight: normal;
`;

export const StyledReservedWord = styled.span`
  color: #d73a49;
`;

export const StyledComponentWord = styled.span`
  color: #005cc5;
`;

export const StyledNormalDeclaration = styled.span`
  color: #24292e;
`;

export const StyledStringDeclaration = styled.span`
  color: #056203;
`;
