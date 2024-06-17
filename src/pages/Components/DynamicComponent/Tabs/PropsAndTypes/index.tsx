/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Grid } from "@inubekit/grid";
import { StyledTokenInfoContainer } from "./styles";
import { Accordion } from "@components/feedback/Accordion";
import { renderInput } from "./util";

interface PropsAndTypesProps {
  component: any;
  modifiedProps: any;
  handlePropChange: any;
  title: string;
}

function PropsAndTypes({
  component,
  modifiedProps,
  handlePropChange,
  title,
}: PropsAndTypesProps) {
  const propType = component.propTypes[title];
  const actualPropValue =
    modifiedProps[title] !== undefined
      ? modifiedProps[title]
      : component.props[title];
  const defaultValue =
    actualPropValue !== undefined ? actualPropValue : propType?.default || "-";
  const type = propType?.type || typeof defaultValue;

  return (
    <Accordion title={title}>
      <Stack direction="column" gap="8px">
        <Grid
          gap="12px"
          autoRows="unset"
          alignContent="unset"
          justifyContent="unset"
          templateColumns="repeat(2, 1fr)"
          templateRows="auto"
        >
          <StyledTokenInfoContainer>
            <Text type="label" children="Description" />
            <Text
              appearance="gray"
              size="medium"
              children={propType?.description || "-"}
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Details" />
            <Text appearance="gray" size="medium" children={""} />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Default" />
            <Text
              appearance="gray"
              size="medium"
              children={propType?.default || "-"}
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Type" />
            <Text appearance="gray" size="medium" children={type} />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Values" />
            <Text
              appearance="gray"
              size="medium"
              children={
                propType?.options
                  ? propType.options
                      .map((option: any) => option.label)
                      .join(", ")
                  : "-"
              }
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Control" />
            {renderInput(
              title,
              type,
              defaultValue,
              propType?.options,
              handlePropChange,
            )}
          </StyledTokenInfoContainer>
        </Grid>
      </Stack>
    </Accordion>
  );
}

export { PropsAndTypes };
