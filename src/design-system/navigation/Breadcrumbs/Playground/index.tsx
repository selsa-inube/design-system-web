import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Breadcrumbs } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { options } from "./data";
import { IselectProps } from "./type";
import { crumbs } from "./mucks";

export const PlaygroundBreadcrumbs = () => {
  const [dataChildren, setDataChildren] = useState<IvaluesProps<IselectProps>>({
    selectProps: {
      options: "5",
    },
  });

  const handleChildData = (data: IvaluesProps<IselectProps>) => {
    setDataChildren(data);
  };

  const sliceCrumbs = crumbs.slice(
    0,
    parseInt(dataChildren!.selectProps!.options)
  );

  return (
    <Stack direction="column" gap="20px" margin="s400">
      <Stack direction="column" width="800px">
        <Breadcrumbs crumbs={sliceCrumbs} />
      </Stack>

      <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
        {`import { Breadcrumbs } from "@inube/design-system";
        
export const ComponentBreadcrumbs = () => <Breadcrumbs />`}
      </SyntaxHighlighter>
      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
