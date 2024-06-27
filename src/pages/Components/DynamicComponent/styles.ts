import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  max-width: 360px;
  max-height: 52px;
  height: 100%;
  width: fit-content;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  & > figure:hover {
    cursor: pointer;
  }
  & > div > div > p {
    font-family: ${({ theme }) =>
      theme?.typography?.body?.large?.font || inube.typography.body.large.font};
    line-height: ${({ theme }) =>
      theme?.typography?.body?.large?.lineHeight ||
      inube.typography.body.large.lineHeight};
    font-size: ${({ theme }) =>
      theme?.typography?.body?.large?.size || inube.typography.body.large.size};
    letter-spacing: ${({ theme }) =>
      theme?.typography?.body?.large?.tracking ||
      inube.typography.body.large.tracking}px;
    font-weight: ${({ theme }) =>
      theme?.typography?.body?.large?.weight ||
      inube.typography.body.large.weight};
  }
`;

const StyledSectionMessageWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 2;
`;

export { StyledTag, StyledSectionMessageWrapper };
