import { useState, useEffect } from "react";
import { Grid, Text, Spinner, Stack } from "@inube/design-system";
import { components } from "../../../../content";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { formatPropValue, processProps } from "./utils";

interface IPlayground {
  component: string;
}

function Playground(props: IPlayground) {
  const { component } = props;

  const [content, setContent] = useState(components[component]);

  useEffect(() => {
    setContent(components[component]);
  }, [component]);

  if (!content) {
    return (
      <Stack
        direction="column"
        gap="24px"
        alignItems="center"
        margin="s300 s0 s0 s0"
      >
        <Text appearance="gray" size="medium">
          loading the component, please wait...
        </Text>
        <Spinner size="medium" appearance="primary" transparent={false} />
      </Stack>
    );
  }

  const Example = content.example;
  const processedProps = processProps(content.props);

  const propsString = Object.entries(content.props)
    .map(([key, value]) => `${key}=${formatPropValue(value)}`)
    .join(" ");

  return (
    <Grid
      gap="s200"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="s300 s0 s0 s0"
    >
      <Text as="h2" type="title">
        {content.name}
      </Text>
      <Text appearance="gray" size="medium">
        {content.description}
      </Text>
      <Example {...processedProps} />
      <SyntaxHighlighter language="tsx" style={docco}>
        {`<${content.name} ${propsString} />`}
      </SyntaxHighlighter>
    </Grid>
  );
}

export { Playground };
