import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { Stack, Label } from "@inube/design-system";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { optionsLabel } from "./data";
import { IselectProps, IswitchChecked, ItextfieldProps } from "./types";
export const PlaygroundLabel = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    selectProps: {
      htmlFor: "id",
      size: "large",
    },
    switchChecked: {
      disabled: false,
      focused: false,
      invalid: false,
    },
    textfieldProps: {
      children: "Label Text",
      margin: "0px",
      padding: "0px",
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  ) => {
    setDataChildren(data);
  };

  return (
    <>
      <Stack direction="column" gap="20px" margin="s400">
        <Stack>
          <Label
            htmlFor={dataChildren?.selectProps?.htmlFor}
            children={dataChildren?.textfieldProps?.children}
            size={dataChildren?.selectProps?.size}
            disabled={dataChildren?.switchChecked?.disabled}
            focused={dataChildren?.switchChecked?.focused}
            invalid={dataChildren?.switchChecked?.invalid}
            margin={dataChildren?.textfieldProps?.margin}
            padding={dataChildren?.textfieldProps?.padding}
          />
        </Stack>

        <SyntaxHighlighter
          showLineNumbers
          customStyle={{ borderRadius: "10px" }}
          language="javascript"
          style={darcula}
        >
          {`import { Label } from "@inube/design-system";

export const LabelDefaultExample = () => <Label htmlFor="${dataChildren
            ?.selectProps?.htmlFor}" ${
            dataChildren?.textfieldProps?.children &&
            `children="${dataChildren?.textfieldProps?.children}"`
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
          } />;`}
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
