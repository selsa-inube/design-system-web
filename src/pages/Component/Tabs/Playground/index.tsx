import { useState, useEffect } from "react";
import { Text } from "@inube/design-system";
import { components } from "../../../../content";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IPlayground {
  component: string;
}

function Playground(props: IPlayground) {
  const { component } = props;

  const [content, setContent] = useState(components[component]);

  useEffect(() => {
    setContent(components[component]);
  }, [component]);

  const Example = content.example;

  const propsString = Object.entries(content.props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  return (
    <>
      <Text margin="10px 0 0 0" size="large" type="headline">
        {content.name}
      </Text>
      <Text margin="0 0 10px 0">{content.description}</Text>
      <Example {...content.props} />
      <SyntaxHighlighter language="javascript" style={docco}>
        {`<${content.name} ${propsString} />`}
      </SyntaxHighlighter>
    </>
  );
}

export { Playground };
