import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Spinner } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, IswitchChecked } from "./type";
import { options } from "./data";

export const PlaygroundSpinner = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, undefined, IswitchChecked>
  >({
    selectProps: {
      appearance: "primary",
      size: "medium",
    },
    switchChecked: {
      transparent: false,
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, undefined, IswitchChecked>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <Spinner
          appearance={dataChildren?.selectProps?.appearance}
          size={dataChildren?.selectProps?.size}
          transparent={dataChildren?.switchChecked?.transparent}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Spinner } from "@inube/design-system";

export const ComponentSpinner = () => <Spinner ${
          dataChildren?.selectProps?.appearance &&
          `appearance="${dataChildren?.selectProps?.appearance}"`
        } ${
          dataChildren?.selectProps?.size &&
          `size="${dataChildren?.selectProps?.size}"`
        } ${dataChildren?.switchChecked?.transparent ? "transparent" : ""} />;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
