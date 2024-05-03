/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Tag } from "@inubekit/tag";
import { Fieldset } from "@inubekit/fieldset";
import { useEffect, useState } from "react";
import { DynamicComponentController } from "@pages/Components/DynamicComponentController";

interface IPlayground {
  component: any;
}

function Playground(props: IPlayground) {
  const { component } = props;
  const Example = component.example;

  const [dynamicComponentProps, setDynamicComponentProps] = useState({
    ...component.props,
  });

  useEffect(() => {
    setDynamicComponentProps({ ...component.props });
  }, [component]);

  const handlePropChange = (propName: any, newValue: any) => {
    setDynamicComponentProps((prevProps: any) => ({
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
        <Tag
          appearance="dark"
          label={`npm install @inubekit/${component.name.toLowerCase()}`}
        />
      </Stack>

      <Stack direction="column" gap="24px">
        <Text type="headline" size="small" children="Examples" />
        <Fieldset legend="Component sample">
          {dynamicComponentProps && <Example {...dynamicComponentProps} />}
        </Fieldset>
        <Fieldset legend="Props">
          <DynamicComponentController
            component={component}
            handlePropChange={handlePropChange}
            dynamicComponentProps={dynamicComponentProps}
          />
        </Fieldset>
      </Stack>
    </Grid>
  );
}

export { Playground };
