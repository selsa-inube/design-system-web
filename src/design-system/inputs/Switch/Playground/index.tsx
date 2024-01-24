import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Switch } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { options } from "./data";
import { IselectProps, ItextfieldProps, IswitchChecked } from "./types";

export const PlaygroundSwitch = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    switchChecked: {
      checked: false,
      disabled: false,
    },
    selectProps: {
      value: "switchTest1",
      size: "small",
    },
    textfieldProps: {
      id: "id",
      name: "name",
      margin: "s0",
      padding: "s0",
    },
  });
  const [checkout, setCheckout] = useState<{ [key: string]: boolean }>({
    name: false,
  });

  const handleCheckout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckout({
      [name]: checked,
    });
  };

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  ) => {
    setDataChildren(data);
  };
  return (
    <Stack direction="column" gap="20px" margin="s400">
      <Stack>
        <Switch
          onChange={handleCheckout}
          id={dataChildren?.textfieldProps?.id}
          disabled={dataChildren?.switchChecked?.disabled}
          name={dataChildren?.textfieldProps?.name}
          value={dataChildren?.selectProps?.value}
          checked={dataChildren?.switchChecked?.checked || checkout.name}
          size={dataChildren?.selectProps?.size}
          margin={dataChildren?.textfieldProps?.margin}
          padding={dataChildren?.textfieldProps?.padding}
        />
      </Stack>
      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Switch } from "@inube/design-system";

export const ComponentSwitch = () => <Switch ${
          dataChildren?.textfieldProps?.id &&
          `id="${dataChildren?.textfieldProps?.id}"`
        } ${dataChildren?.switchChecked?.disabled ? "disabled" : ""} ${
          dataChildren?.textfieldProps?.name &&
          `name="${dataChildren?.textfieldProps?.name}"`
        } ${dataChildren?.selectProps?.value} ${
          dataChildren?.switchChecked?.checked ? "checked" : ""
        } ${dataChildren?.selectProps?.size} ${
          dataChildren?.textfieldProps?.margin &&
          `margin="${dataChildren?.textfieldProps?.margin}"`
        } ${
          dataChildren?.textfieldProps?.padding &&
          `padding="${dataChildren?.textfieldProps?.padding}"`
        } />;`}
      </SyntaxHighlighter>
      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
