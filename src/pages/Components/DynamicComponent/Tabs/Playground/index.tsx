/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inubekit/text";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Fieldset } from "@inubekit/fieldset";
import { useState } from "react";
import { processProps } from "../utils";
import { DynamicComponentControls } from "@components/data/DynamicComponentControls";

interface IPlayground {
  component: any;
}

function Playground(props: IPlayground) {
  const { component } = props;
  const Example = component.example;

  const [modifiedProps, setModifiedProps] = useState({});

  const processedProps = processProps({ ...component.props, ...modifiedProps });

  const handlePropChange = (propName: any, newValue: any) => {
    setModifiedProps((prevProps) => ({
      ...prevProps,
      [propName]: newValue,
    }));
  };

  return (
    <Grid
      gap="48px"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
    >
      <Stack direction="column" gap="32px">
        <Text type="title" size="medium" children="Playground" />
        <Fieldset legend="Component sample" spacing="wide">
          {component.example && (
            <Example key={component.key} {...processedProps} />
          )}
        </Fieldset>
      </Stack>

      <Stack direction="column" gap="32px">
        <Text type="title" size="medium" children="Component properties" />
        <Fieldset legend="Props" spacing="wide">
          <DynamicComponentControls
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
