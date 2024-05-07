import {
  StyledTable,
  StyledTr,
  StyledTd,
  StyledTbody,
  StyledTdTitle,
} from "./styles";
import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";

interface IInformationsProps {
  nameProps: string;
  description?: string;
  type: string;
  value: string;
}

const InformationsProps = (props: IInformationsProps) => {
  const { nameProps, description, type, value } = props;

  return (
    <StyledTable>
      <StyledTdTitle>
        <Tag appearance="gray" label={nameProps} weight="strong" />
      </StyledTdTitle>
      <StyledTbody>
        <StyledTr>
          <StyledTdTitle>
            <Text type="title" size="medium" children="Description" />
          </StyledTdTitle>
          <StyledTd>
            <Text appearance="gray">{description}</Text>
          </StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTdTitle>
            <Text type="title" size="medium" children="Type" />
          </StyledTdTitle>
          <StyledTd>
            <Text appearance="gray">{type}</Text>
          </StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTdTitle>
            <Text type="title" size="medium" children="Values" />
          </StyledTdTitle>
          <StyledTd>
            <Text appearance="gray">{value}</Text>
          </StyledTd>
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  );
};

export { InformationsProps };
export type { IInformationsProps };
