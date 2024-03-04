import { useState } from "react";

import { components } from "../../../../content";
import { MdAdd } from "react-icons/md";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IPlayground {
  component: string;
}

function Playground(props: IPlayground) {
  const { component } = props;

  const [content] = useState(components[component]);

  const Example = content.example;

  return (
    <>
      <h1>{content.name}</h1>
      <p>{content.description}</p>
      <Example
        appearance={content.props.appearance}
        icon={<MdAdd />}
        size="32px"
      />
      <SyntaxHighlighter language="javascript" style={docco}>
        {`<${content.name} appearance="${content.props.appearance}"/>`}
      </SyntaxHighlighter>
    </>
  );
}

export { Playground };
