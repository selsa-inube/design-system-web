import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
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
      <Grid
        gap="16px"
        autoRows="unset"
        alignContent="unset"
        justifyContent="unset"
        margin="10px 0 10px 0"
      >
        <Stack>
          <Tag appearance="gray" label={name} weight="strong" />
        </Stack>

        <Stack gap="12px">
          <Text type="title" size="medium" children="Description" />
          <Text appearance="gray">{description}</Text>
        </Stack>
        <Stack gap="12px">
          <Text type="title" size="medium" children="Type" />
          <Text appearance="gray">{type}</Text>
        </Stack>
        <Stack gap="12px">
          <Text type="title" size="medium" children="Values" />
          <Text appearance="gray">{value}</Text>
        </Stack>
      </Grid>
    </StyledContainerGrid>
  );
};

export { ComponentProperties };
