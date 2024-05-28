/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inubekit/text";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Tag } from "@inubekit/tag";
import { Fieldset } from "@inubekit/fieldset";
import { useMemo, useState } from "react";
import {
  StyledFieldSetComponentContainer,
  StyledTag,
  StyledSectionMessageWrapper,
} from "./styles";
import { processProps } from "../utils";
import { DynamicComponentControls } from "@components/data/DynamicComponentControls";
import {
  ISectionMessageAppearance,
  SectionMessage,
} from "@inubekit/sectionmessage";
import { MdInfo } from "react-icons/md";
import { Icon } from "@inubekit/icon";
import { MdContentCopy } from "react-icons/md";

interface IPlayground {
  component: any;
}

function Playground(props: IPlayground) {
  const { component } = props;
  const Example = component.example;

  const [modifiedProps, setModifiedProps] = useState({});
  const [sectionMessage, setSectionMessage] = useState<{
    title: string;
    description: string;
    appearance: string;
  } | null>(null);

  const processedProps = processProps({ ...component.props, ...modifiedProps });
  const installCommand = useMemo(
    () => `npm install @inubekit/${component.name.toLowerCase()}`,
    [component.name],
  );

  const handlePropChange = (propName: any, newValue: any) => {
    setModifiedProps((prevProps) => ({
      ...prevProps,
      [propName]: newValue,
    }));
  };

  const handleTagClick = () => {
    navigator.clipboard.writeText(installCommand).then(
      () => {
        setSectionMessage({
          title: "Success",
          description: "Text copied to clipboard successfully!",
          appearance: "success",
        });
      },
      (err) => {
        setSectionMessage({
          title: "Error",
          description: `Could not copy text to clipboard. ${err}`,
          appearance: "error",
        });
      },
    );
  };

  return (
    <>
      <Grid
        gap="48px"
        autoRows="unset"
        alignContent="unset"
        justifyContent="unset"
        margin="48px 0 0 0"
      >
        <Stack direction="column" gap="32px">
          <Text type="headline" size="small" children="Installation" />
          <StyledTag>
            <Tag appearance="dark" label={installCommand} />
            <Icon
              appearance="primary"
              icon={<MdContentCopy />}
              spacing="compact"
              variant="filled"
              onClick={handleTagClick}
            />
          </StyledTag>
        </Stack>

        <Stack direction="column" gap="32px">
          <Text type="headline" size="small" children="Examples" />
          <StyledFieldSetComponentContainer>
            <Fieldset legend="Component sample" spacing="wide">
              {component.example && (
                <Example key={component.key} {...processedProps} />
              )}
            </Fieldset>
          </StyledFieldSetComponentContainer>
          <Fieldset legend="Props" spacing="wide">
            <DynamicComponentControls
              component={component}
              handlePropChange={handlePropChange}
              dynamicComponentProps={processedProps}
            />
          </Fieldset>
        </Stack>
      </Grid>
      {sectionMessage && (
        <StyledSectionMessageWrapper>
          <SectionMessage
            icon={<MdInfo />}
            title={sectionMessage.title}
            description={sectionMessage.description}
            appearance={sectionMessage.appearance as ISectionMessageAppearance}
            duration={5000}
            closeSectionMessage={() => setSectionMessage(null)}
            isMessageResponsive={false}
          />
        </StyledSectionMessageWrapper>
      )}
    </>
  );
}

export { Playground };
