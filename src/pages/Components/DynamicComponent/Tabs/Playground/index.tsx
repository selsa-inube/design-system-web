/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inube/design-system";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Fieldset } from "@inubekit/fieldset";
import { useState } from "react";
import { processProps } from "../utils";
import { PropsAndTypes } from "../PropsAndTypes";

interface IPlayground {
  component: any;
}

function Playground({ component }: IPlayground) {
  const Example = component.example;

  const [modifiedProps, setModifiedProps] = useState({});

  const processedProps = processProps({ ...component.props, ...modifiedProps });

  const handlePropChange = (propName: string, newValue: any) => {
    setModifiedProps((prevProps) => ({
      ...prevProps,
      [propName]: newValue,
    }));
  };

  const propKeys = Object.keys(component.propTypes);

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
        <Stack direction="column" gap="16px">
          {propKeys.map((key) => (
            <PropsAndTypes
              key={key}
              component={component}
              modifiedProps={modifiedProps}
              title={key}
              handlePropChange={handlePropChange}
            />
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
}

export { Playground };
