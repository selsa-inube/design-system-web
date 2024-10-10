/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTable as Table } from "@components/data/Table";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { tokenDescription } from "../../../../../content/tokens";
import { StyledTableWrapper, StyledTokenInfoContainer } from "./styles";
import { useFlag } from "@inubekit/flag";
import { useEffect } from "react";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function Theming(props: any) {
  const { component } = props;
  const { addFlag } = useFlag();

  let tokensArray: any[] = [];
  let tokenStructure: string[] = [];
  let tokenEntries: any[] = [];
  let headers: { label: string; key: string; action?: boolean }[] = [];
  let data: {
    [key: string]: {
      value: React.ReactNode;
      type?: "text" | "toggle" | "icon" | "custom";
      checked?: boolean;
    };
  }[] = [];

  if (component?.tokens) {
    tokensArray = Object.values(component.tokens);
    const firstTokenObject = tokensArray[0] ?? {};

    tokenStructure = Object.keys(firstTokenObject);
    tokenEntries = Object.values(component.tokens);

    headers = tokenStructure.map((key, index) => ({
      label: capitalizeFirstLetter(key.replace(/([A-Z])/g, " $1").trim()),
      key: key,
      action: index >= tokenStructure.length - 2,
    }));

    data = tokenEntries.map((entry) => {
      const formattedEntry: {
        [key: string]: {
          value: React.ReactNode;
          type?: "text" | "toggle" | "icon" | "custom";
          checked?: boolean;
        };
      } = {};
      tokenStructure.forEach((key) => {
        formattedEntry[key] = {
          value: entry[key],
          type: "text",
        };
      });
      return formattedEntry;
    });
  }

  const dependencies =
    component?.dependencies && Object.values(component.dependencies);

  useEffect(() => {
    if (dependencies) {
      dependencies.forEach(
        (value: { component: string; description: string }) => {
          addFlag({
            title: "Dependencies",
            description: `${value.component}: ${value.description}`,
            appearance: "help",
            duration: 5000,
          });
        },
      );
    }
  }, [dependencies, addFlag]);

  return (
    <Grid
      gap="32px"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="-16px 0 0 0"
    >
      <Stack direction="column" gap="8px" width="fit-content">
        <Text type="title" size="medium" children="How to read tokens" />
        <Text
          size="medium"
          appearance="gray"
          children="Tokens are separated by elements that range from the generic to the most detailed."
        />
      </Stack>
      {tokensArray.length > 0 ? (
        <>
          <Grid
            gap="12px"
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
                        children={`${index + 1}. ${tokenDescription[key]
                          ?.label}:`}
                        weight="bold"
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
          <StyledTableWrapper>
            <Table headers={headers} data={data} />
          </StyledTableWrapper>
        </>
      ) : null}
    </Grid>
  );
}

export { Theming };
