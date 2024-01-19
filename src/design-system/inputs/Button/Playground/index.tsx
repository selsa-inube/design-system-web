import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Button } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { options } from "./data";
import { IselectProps, ItextfielProps, IswitchProps } from "./type";

export const PlaygroundButton = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfielProps, IswitchProps>
  >({
    selectProps: {
      appearance: "primary",
      type: "button",
      spacing: "wide",
      variant: "filled",
    },
    textfieldProps: {
      children: "Button",
      path: "/",
    },
    switchChecked: {
      fullwidth: false,
      disabled: false,
      loading: false,
      cursorHover: false,
      parentHover: false,
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfielProps, IswitchProps>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <Button
          appearance={dataChildren?.selectProps?.appearance}
          type={dataChildren?.selectProps?.type}
          spacing={dataChildren?.selectProps?.spacing}
          fullwidth={dataChildren?.switchChecked?.fullwidth}
          disabled={dataChildren?.switchChecked?.disabled}
          loading={dataChildren?.switchChecked?.loading}
          cursorHover={dataChildren?.switchChecked?.cursorHover}
          parentHover={dataChildren?.switchChecked?.parentHover}
        >
          {dataChildren?.textfieldProps?.children}
        </Button>
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={a11yDark}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
        useInlineStyles
        wrapLines
        //codeTagProps={{}}
      >
        {`import { Button } from "@inube/design-system";

export const ComponentButton = () => <Button  ${
          dataChildren?.selectProps?.appearance &&
          `appearance="${dataChildren?.selectProps?.appearance}"`
        } ${
          dataChildren?.selectProps?.type &&
          `type="${dataChildren?.selectProps?.type}"`
        } ${
          dataChildren?.selectProps?.spacing &&
          `spacing="${dataChildren?.selectProps?.spacing}"`
        } ${dataChildren?.switchChecked?.fullwidth ? "fullwidth" : ""} ${
          dataChildren?.switchChecked?.disabled ? "disabled" : ""
        } ${dataChildren?.switchChecked?.loading ? "loading" : ""} ${
          dataChildren?.switchChecked?.cursorHover ? "cursorHover" : ""
        } ${dataChildren?.switchChecked?.parentHover ? "parentHover" : ""}>${
          dataChildren?.textfieldProps?.children &&
          dataChildren?.textfieldProps?.children
        }</Button>;`}
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
