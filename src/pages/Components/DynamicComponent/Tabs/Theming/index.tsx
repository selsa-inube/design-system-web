/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@components/data/Table";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { tokenDescription } from "../../../../../content/tokens";
import {
  StyledSectionMessageWrapper,
  StyledTableWrapper,
  StyledTokenInfoContainer,
} from "./styles";
import { breakpoints } from "@components/data/DynamicComponentControls/config";
import { SectionMessage } from "@inubekit/sectionmessage";
import { MdHelpOutline } from "react-icons/md";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function Theming(props: any) {
  const { component } = props;

  let tokensArray: any[] = [];
  let tokenStructure: string[] = [];
  let tokenEntries: any[] = [];
  let titles: any[] = [];
  let entries: any[] = [];

  if (component?.tokens) {
    tokensArray = Object.values(component.tokens);
    const firstTokenObject = tokensArray[0] ?? {};

    tokenStructure = Object.keys(firstTokenObject);
    tokenEntries = Object.values(component.tokens).slice(0, 3);

    titles = tokenStructure.map((key, index) => ({
      id: key,
      titleName: capitalizeFirstLetter(key.replace(/([A-Z])/g, " $1").trim()),
      priority: 1 - index,
    }));

    entries = tokenEntries.map((entry, index) => ({
      id: index,
      ...entry,
    }));
  }

  const dependencies =
    component?.dependencies && Object.values(component.dependencies);

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
            <Table
              titles={titles}
              entries={entries}
              breakpoints={breakpoints}
            />
          </StyledTableWrapper>
        </>
      ) : (
        dependencies &&
        dependencies.map(
          (value: { component: string; description: string }) => (
            <StyledSectionMessageWrapper>
              <SectionMessage
                key={value.component + value.description}
                icon={<MdHelpOutline />}
                title="Dependencies"
                description={`${value.component}: ${value.description}`}
                appearance="help"
                duration={1}
                closeSectionMessage={() => {}}
                isMessageResponsive
              />
            </StyledSectionMessageWrapper>
          ),
        )
      )}
    </Grid>
  );
}

export { Theming };
