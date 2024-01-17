import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

//import { ItextfieldProps, IswitchChecked } from "./types";

import { options } from "./data";

export const PlaygroundTextarea = () => {
  const [dataChildren, setDataChildren] = useState<IvaluesProps>({
    textfieldProps: { size: "24px" },
    switchChecked: {
      cursorHover: false,
      disabled: false,
      parentHover: false,
    },
  });

  const handleChildData = (data: IvaluesProps) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack></Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Textarea } from "@inube/design-system";

export const ComponentTextarea = () => <Textarea   />;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
