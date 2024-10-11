/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Text } from "@inubekit/text";
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
  const isDescriptionLong =
    typeof description === "string"
      ? description.length > 105
      : description.props?.children?.[0].props?.children?.length > 105;

  const handleIconClick = () => {
    setIsBlanketVisible(true);
  };

  const handleBlanketClose = () => {
    setIsBlanketVisible(false);
  };

  const truncateDescription = (desc: string, limit: number) => {
    return desc.length > limit ? `${desc.slice(0, limit)}...` : desc;
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
            <Text type="label" children="Description" weight="bold" />
            <Text
              appearance="gray"
              size="medium"
              children={
                typeof description === "string"
                  ? truncateDescription(description, 120)
                  : truncateDescription(
                      description.props.children[0].props.children,
                      120,
                    )
              }
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer
            $isDescriptionLong={isDescriptionLong}
            onClick={isDescriptionLong ? handleIconClick : undefined}
          >
            <Text type="label" children="Details" weight="bold" />
            <Stack alignItems="center">
              <Icon
                appearance={isDescriptionLong ? "primary" : "gray"}
                icon={<MdOpenInNew />}
              />
              <Tag
                label="View"
                appearance={isDescriptionLong ? "dark" : "gray"}
              />
            </Stack>
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Default" weight="bold" />
            <Text
              appearance="gray"
              size="medium"
              children={propType?.default || "-"}
            />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Type" weight="bold" />
            <Text appearance="gray" size="medium" children={type} />
          </StyledTokenInfoContainer>
          <StyledTokenInfoContainer>
            <Text type="label" children="Values" weight="bold" />
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
                    Additional property details
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
