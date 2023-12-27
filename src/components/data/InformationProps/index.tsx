import { ReactNode } from "react";
import { Text } from "@inube/design-system";

import {
  StyledTable,
  StyledTr,
  StyledTd,
  StyledTbody,
  StyledCode,
  StyledCaption,
  StyledCodeTd,
  StyledTdTitle,
} from "./styles";

interface InformationsProps {
  nameProps: string;
  description?: string;
  type: string;
  example?: ReactNode;
}

export const InformationsProps = (props: InformationsProps) => {
  const { nameProps, description, type } = props;

  return (
    <StyledTable>
      <StyledCaption>
        <StyledCode>{nameProps}</StyledCode>
      </StyledCaption>

      <StyledTbody>
        <StyledTr>
          <StyledTdTitle>
            <Text>Description</Text>
          </StyledTdTitle>
          <StyledTd>
            <Text size="medium">{description}</Text>
          </StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTdTitle>
            <Text>Type</Text>
          </StyledTdTitle>
          <StyledTd>
            <StyledCodeTd>{type}</StyledCodeTd>
          </StyledTd>
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  );
};
