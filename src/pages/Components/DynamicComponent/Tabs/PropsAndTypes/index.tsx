/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Grid } from "@inubekit/grid";
import {
  StyledDetailsContainer,
  StyledPropertiesContainer,
  StyledTokenInfoContainer,
} from "./styles";
import { Accordion } from "@components/feedback/Accordion";

import { Icon } from "@inubekit/icon";
import { Tag } from "@inubekit/tag";
import { MdOpenInNew, MdClear } from "react-icons/md";
import { Blanket } from "@inubekit/blanket";
import { Button } from "@inubekit/button";
import { Divider } from "@inubekit/divider";

interface PropsAndTypesProps {
  component: any;
  modifiedProps: any;
  handlePropChange: any;
  title: string;
}

function PropsAndTypes({
  component,
  modifiedProps,
  title,
}: PropsAndTypesProps) {
  const [isBlanketVisible, setIsBlanketVisible] = useState(false);

  const propType = component.propTypes[title];
  const actualPropValue =
    modifiedProps[title] !== undefined
      ? modifiedProps[title]
      : component.props[title];
  const defaultValue =
    actualPropValue !== undefined ? actualPropValue : propType?.default || "-";
  const type = propType?.type || typeof defaultValue;

  const description = propType?.description || "-";
  const isDescriptionLong = description.length > 105;

  const handleIconClick = () => {
    setIsBlanketVisible(true);
  };

  const handleBlanketClose = () => {
    setIsBlanketVisible(false);
  };

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
              children={description.slice(0, 110)}
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Details" />
            <Stack alignItems="center">
              <Icon
                appearance={isDescriptionLong ? "primary" : "gray"}
                icon={<MdOpenInNew />}
                onClick={isDescriptionLong ? handleIconClick : undefined}
              />
              <Tag
                label="View"
                appearance={isDescriptionLong ? "dark" : "gray"}
              />
            </Stack>
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
        </Grid>
        {isBlanketVisible && (
          <Blanket>
            <StyledDetailsContainer>
              <Stack
                direction="column"
                gap="20px"
                alignItems="center"
                padding="24px"
                width="100%"
                height="100%"
              >
                <Stack direction="column" gap="16px" width="100%">
                  <Stack justifyContent="space-between">
                    <Text
                      appearance="dark"
                      type="title"
                      size="medium"
                      children={"Details"}
                    />
                    <Icon
                      appearance="dark"
                      icon={<MdClear />}
                      onClick={handleBlanketClose}
                    />
                  </Stack>
                  <Text appearance="gray" size="medium">
                    Aadditional property details
                  </Text>
                  <Divider dashed />
                </Stack>
                <StyledPropertiesContainer>
                  <Stack padding="16px">
                    <Text
                      appearance="gray"
                      size="medium"
                      children={description}
                    />
                  </Stack>
                </StyledPropertiesContainer>

                <Stack justifyContent="flex-end" width="100%">
                  <Button
                    children="Accept"
                    onClick={handleBlanketClose}
                    spacing="compact"
                  />
                </Stack>
              </Stack>
            </StyledDetailsContainer>
          </Blanket>
        )}
      </Stack>
    </Accordion>
  );
}

export { PropsAndTypes };
