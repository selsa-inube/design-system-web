import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Label } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, IswitchChecked, ItextfieldProps } from "./types";
import { optionsLabel } from "./data";

export const PlaygroundLabel = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    selectProps: {
      size: "large",
    },
    switchChecked: {
      disabled: false,
      focused: false,
      invalid: false,
    },
    textfieldProps: {
      htmlFor: "id",
      children: "Label Text",
      margin: "0px",
      padding: "0px",
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>,
  ) => {
    setDataChildren(data);
  };

  return (
    <>
      <Stack direction="column" gap="20px" margin="32px">
        <Stack>
          <Label
            htmlFor={dataChildren?.textfieldProps?.htmlFor}
            size={dataChildren?.selectProps?.size}
            disabled={dataChildren?.switchChecked?.disabled}
            focused={dataChildren?.switchChecked?.focused}
            invalid={dataChildren?.switchChecked?.invalid}
            margin={dataChildren?.textfieldProps?.margin}
            padding={dataChildren?.textfieldProps?.padding}
          >
            {dataChildren?.textfieldProps?.children}
          </Label>
        </Stack>

        <SyntaxHighlighter
          showLineNumbers
          customStyle={{ borderRadius: "10px" }}
          language="javascript"
          style={darcula}
        >
          {`import { Label } from "@inube/design-system";

export const LabelDefaultExample = () => <Label ${
            dataChildren?.textfieldProps?.htmlFor &&
            `htmlFor="${dataChildren?.textfieldProps?.htmlFor}"`
          } size="${dataChildren?.selectProps?.size}" ${
            dataChildren?.switchChecked?.disabled ? "disabled" : ""
          } ${dataChildren?.switchChecked?.focused ? "focused" : ""} ${
            dataChildren?.switchChecked?.invalid ? "invalid" : ""
          } ${
            dataChildren?.textfieldProps?.margin &&
            `margin="${dataChildren?.textfieldProps?.margin}"`
          } ${
            dataChildren?.textfieldProps?.padding &&
            `padding="${dataChildren?.textfieldProps?.padding}"`
          } >${dataChildren?.textfieldProps?.children}</Label>;`}
        </SyntaxHighlighter>

        <ControlsProps
          options={optionsLabel}
          sendFatherData={handleChildData}
          valuesProps={dataChildren}
        />
      </Stack>
    </>
  );
};
