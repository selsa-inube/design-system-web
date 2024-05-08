/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@components/data/Table";
import { Grid } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { tokenDescription } from "../../../../../content/tokens";
import { breakpoints } from "@pages/Components/DynamicComponentController/config";
import { StyledTokenInfoContainer } from "./styles";

function Theming(props: any) {
  const { component } = props;

  const tokensArray = Object.values(component?.tokens ?? {});
  const firstTokenObject = tokensArray[0] ?? {};

  const tokenStructure = Object.keys(firstTokenObject);
  const tokenEntries = Object.values(component.tokens).slice(0, 3);

  const titles = tokenStructure.map((key, index) => ({
    id: key,
    titleName: key.replace(/([A-Z])/g, " $1").trim(),
    priority: 1 - index,
  }));

  const entries: any = tokenEntries.map((entry: any, index) => ({
    id: index,
    ...entry,
  }));

  return (
    <Grid
      gap="s400"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="s300 s0 s0 s0"
    >
      <Stack direction="column" gap="8px">
        <Text type="headline" size="small" children="How to read tokens" />
        <Text
          type="body"
          size="large"
          appearance="gray"
          children="Tokens are separated by elements that range from the generic to the most detailed."
        />
      </Stack>
      <Grid
        gap="s150"
        autoRows="unset"
        alignContent="unset"
        justifyContent="unset"
        templateColumns="auto auto"
        templateRows="auto"
      >
        {tokenStructure.map(
          (key, index) =>
            tokenDescription[key]?.description && (
              <StyledTokenInfoContainer key={key}>
                <Stack
                  gap="14px"
                  height="36px"
                  alignItems="center"
                  padding="8px 16px"
                >
                  <Text
                    type="label"
                    children={`${index + 1}. ${tokenDescription[key]?.label}:`}
                  ></Text>
                  <Text
                    appearance="gray"
                    size="medium"
                    children={tokenDescription[key]?.description}
                  ></Text>
                </Stack>
              </StyledTokenInfoContainer>
            ),
        )}
      </Grid>
      <Table titles={titles} entries={entries} breakpoints={breakpoints} />
    </Grid>
  );
}

export { Theming };
