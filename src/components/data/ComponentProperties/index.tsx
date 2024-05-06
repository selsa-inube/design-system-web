import { Grid } from "@inubekit/grid";
import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";
import { StyledContainerGrid } from "./styles";

interface IComponentProperties {
  name: string;
  description: string;
  type: string;
  value: string;
}

const ComponentProperties = (props: IComponentProperties) => {
  const { name, description, type, value } = props;
  return (
    <StyledContainerGrid>
      <Tag appearance="gray" label={name} weight="strong" />
      <Grid
        gap="16px"
        autoRows="unset"
        alignContent="unset"
        justifyContent="unset"
        margin="10px 0 10px 0"
        templateColumns="auto 1fr"
        templateRows="auto"
      >
        {/* <Tag appearance="gray" label={name} weight="strong" /> */}
        <Text type="title" size="medium" children="Description" />
        <Text appearance="gray">{description}</Text>
        <Text type="title" size="medium" children="Type" />
        <Text appearance="gray">{type}</Text>
        <Text type="title" size="medium" children="Values" />
        <Text appearance="gray">{value}</Text>
      </Grid>
    </StyledContainerGrid>
  );
};

export { ComponentProperties };
