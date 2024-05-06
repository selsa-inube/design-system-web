/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Tag } from "@inubekit/tag";
import { Fieldset } from "@inubekit/fieldset";
import { useState } from "react";
import { DynamicComponentController } from "@pages/Components/DynamicComponentController";
import { StyledTag } from "./styles";
import { processProps } from "../utils";

interface IPlayground {
  component: any;
}

function Playground(props: IPlayground) {
  const { component } = props;
  const Example = component.example;

  const [modifiedProps, setModifiedProps] = useState({});

  const processedProps = processProps({ ...component.props, ...modifiedProps });
  console.log("processedProps: ", processedProps);
  const handlePropChange = (propName: any, newValue: any) => {
    setModifiedProps((prevProps) => ({
      ...prevProps,
      [propName]: newValue,
    }));
  };

  return (
    <Grid
      gap="s600"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="s300 s0 s0 s0"
    >
      <Stack direction="column" gap="32px">
        <Text type="headline" size="small" children="Installation" />
        <StyledTag>
          <Tag
            appearance="dark"
            label={`npm install @inubekit/${component.name.toLowerCase()}`}
          />
        </StyledTag>
      </Stack>

      <Stack direction="column" gap="24px">
        <Text type="headline" size="small" children="Examples" />
        <Fieldset legend="Component sample">
          {component.example && (
            <Example key={component.key} {...processedProps} />
          )}
        </Fieldset>
        <Fieldset legend="Props">
          <DynamicComponentController
            component={component}
            handlePropChange={handlePropChange}
            dynamicComponentProps={processedProps}
          />
        </Fieldset>
      </Stack>
    </Grid>
  );
}

export { Playground };
