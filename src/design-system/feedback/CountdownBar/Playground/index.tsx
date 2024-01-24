import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, CountdownBar } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, ItextfieldProps, IswitchChecked } from "./type";
import { options } from "./ data";

export const PlaygroundCountdownBar = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    selectProps: {
      appearance: "primary",
    },
    textfieldProps: {
      height: "4px",
      duration: 3000,
    },
    switchChecked: {
      paused: false,
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <CountdownBar
          height={dataChildren?.textfieldProps?.height}
          appearance={dataChildren?.selectProps?.appearance}
          duration={dataChildren?.textfieldProps?.duration}
          paused={dataChildren?.switchChecked?.paused}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { CountdownBar } from "@inube/design-system";

export const ComponentCountdownBar = () => <CountdownBar ${
          dataChildren?.textfieldProps?.height &&
          `height="${dataChildren?.textfieldProps?.height}"`
        }  ${
          dataChildren?.selectProps?.appearance &&
          `appearance="${dataChildren?.selectProps?.appearance}"`
        } ${
          dataChildren?.textfieldProps?.duration &&
          `duration="${dataChildren?.textfieldProps?.duration}"`
        } ${dataChildren?.switchChecked?.paused ? "paused" : ""} />;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
