/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inubekit/text";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { useState } from "react";
import { PropsAndTypes } from "../PropsAndTypes";

interface IPlayground {
  component: any;
}

function Playground({ component }: IPlayground) {
  const [modifiedProps, setModifiedProps] = useState({});

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
        {component && component.frame && component.frame}
      </Stack>
      {propKeys && propKeys.length > 0 && (
        <Stack direction="column" gap="32px">
          <Text type="title" size="medium" children="Interface" />
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
      )}
    </Grid>
  );
}

export { Playground };
