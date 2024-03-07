import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { SkeletonLine } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { ItextfieldProps, IswitchChecked } from "./type";
import { options } from "./data";

export const PlaygroundSkeletonLine = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<undefined, ItextfieldProps, IswitchChecked>
  >({
    textfieldProps: { width: "100%" },
    switchChecked: {
      animated: false,
    },
  });

  const handleChildData = (
    data: IvaluesProps<undefined, ItextfieldProps, IswitchChecked>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack>
        <SkeletonLine
          width={dataChildren?.textfieldProps?.width}
          animated={dataChildren?.switchChecked?.animated}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { SkeletonLine } from "@inube/design-system";

export const ComponentSkeletonLine = () => <SkeletonLine ${
          dataChildren?.textfieldProps?.width &&
          `width="${dataChildren?.textfieldProps?.width}"`
        } ${dataChildren?.switchChecked?.animated ? "animated" : ""} />;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
