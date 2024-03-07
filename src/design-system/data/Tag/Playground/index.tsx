import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Tag } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { options } from "./data";
import { IselectProps, ItextfieldProps } from "./type";

export const PlaygroundTag = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps>
  >({
    selectProps: {
      appearance: "primary",
    },
    textfieldProps: { label: "Tag" },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack>
        <Tag
          appearance={dataChildren?.selectProps?.appearance}
          label={dataChildren?.textfieldProps?.label}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Tag } from "@inube/design-system";

export const ComponentTag = () => <Tag appearance="${dataChildren?.selectProps?.appearance}" label="${dataChildren?.textfieldProps?.label}" />;`}
      </SyntaxHighlighter>

      {
        <ControlsProps
          options={options}
          sendFatherData={handleChildData}
          valuesProps={dataChildren}
        />
      }
    </Stack>
  );
};
