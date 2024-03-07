import { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { SkeletonIcon } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { option } from "./data";
import { ItextfieldProps, IswitchChecked } from "./types";
export const PlaygroundSkeletonIcon = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<undefined, ItextfieldProps, IswitchChecked>
  >({
    textfieldProps: {
      size: "24px",
    },
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
    <Stack margin="16px 32px" direction="column" gap="20px">
      <Stack>
        <SkeletonIcon
          size={dataChildren?.textfieldProps?.size}
          animated={dataChildren?.switchChecked?.animated}
        />
      </Stack>
      <SyntaxHighlighter
        showLineNumbers
        customStyle={{ borderRadius: "10px" }}
        language="javascript"
        style={darcula}
      >
        {`import { SkeletonIcon } from "@inube/design-system"; 

export const ComponentSkeletonIcon = () => <SkeletonIcon ${
          dataChildren?.textfieldProps?.size &&
          `size="${dataChildren?.textfieldProps?.size}"`
        } ${dataChildren?.switchChecked?.animated ? "animated" : ""} />;`}
      </SyntaxHighlighter>
      <ControlsProps
        options={option}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
