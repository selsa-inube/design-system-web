import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { FieldsetTokens } from "@inubekit/fieldset";

interface IStyledTokenInfoContainer {
  $isDescriptionLong?: boolean;
}

const StyledContainerProperties = styled.div`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || FieldsetTokens.border.color};
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
        theme?.fieldset?.border?.color || FieldsetTokens.border.color};
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

const StyledTokenInfoContainer = styled.div<IStyledTokenInfoContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  gap: 12px;
  padding: 6px 16px;
  background-color: ${({ theme }) =>
    theme.palette?.neutral?.N10 || inube.palette.neutral.N10};
  border-radius: 8px;
  max-width: 722px;
  height: 52px;
  cursor: ${({ $isDescriptionLong }) =>
    $isDescriptionLong ? "pointer" : "default"};
`;

const StyledSelectContainer = styled.div`
  & > div {
    position: relative;
    & > ul {
      max-width: 300px;
      position: absolute;
      z-index: 2;
    }
  }
`;

const StyledTextfieldContainer = styled.div`
  & > div {
    width: auto;
  }
`;

const StyledDetailsContainer = styled.div`
  & > div {
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
    border-radius: 16px;
    max-width: 616px;
    max-height: 744px;
  }
`;

const StyledPropertiesContainer = styled.div`
  & > div {
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
    border-radius: 8px;
  }
`;

export {
  StyledContainerProperties,
  StyledComponentProperties,
  StyledDetailsContainer,
  StyledPropertiesContainer,
  StyledTag,
  StyledTokenInfoContainer,
  StyledSelectContainer,
  StyledTextfieldContainer,
};
