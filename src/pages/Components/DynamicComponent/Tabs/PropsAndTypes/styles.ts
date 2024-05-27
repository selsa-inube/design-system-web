import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerProperties = styled.div`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  width: 100%;
  max-width: 800px;
  padding: 24px 20px;
`;

const StyledTag = styled.div`
  > div {
    max-width: 200px;
    max-height: 52px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 6px;
    justify-content: center;
  }
`;

const StyledComponentProperties = styled.div`
  & > div {
    border-bottom: dashed 2px
      ${({ theme }) =>
        theme?.fieldset?.border?.color || inube.fieldset.border.color};
  }

  & > div:first-child {
    padding-bottom: 20px;
  }

  & > div:not(:first-child) {
    padding: 20px 0px;
  }

  & > div:last-child {
    border-bottom: none;
  }
`;

export { StyledContainerProperties, StyledComponentProperties, StyledTag };
