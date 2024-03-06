import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Select } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { optionSelect, options } from "./data";
import { IselectProps, IswitchProps, ItextfielProps } from "./types";

export const PlaygroundSelect = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfielProps, IswitchProps>
  >({
    selectProps: {
      status: "pending",
      size: "wide",
    },
    textfieldProps: {
      id: "id",
      name: "name",
      label: "label",
      placeholder: "placeholder",
    },
    switchChecked: {
      fullwidth: false,
      disabled: false,
      required: false,
      readonly: false,
    },
  });

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfielProps, IswitchProps>,
  ) => {
    setDataChildren(data);
  };

  const [value, setValue] = useState({
    value: "",
    name: dataChildren?.textfieldProps?.name,
  });

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
    setValue({ ...value, value: e.target.innerText, name });
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack>
        <Select
          id={dataChildren?.textfieldProps?.id}
          name={dataChildren?.textfieldProps?.name}
          label={dataChildren?.textfieldProps?.label}
          placeholder={dataChildren?.textfieldProps?.placeholder}
          fullwidth={dataChildren?.switchChecked?.fullwidth}
          disabled={dataChildren?.switchChecked?.disabled}
          size={dataChildren?.selectProps?.size}
          required={dataChildren?.switchChecked?.required}
          readonly={dataChildren?.switchChecked?.readonly}
          value={value.value}
          options={optionSelect}
          onChange={onChange}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Select } from "@inube/design-system";

export const ComponentSelect = () => <Select  ${
          dataChildren?.textfieldProps?.id &&
          `id="${dataChildren?.textfieldProps?.id}"`
        } ${
          dataChildren?.textfieldProps?.name &&
          `name="${dataChildren?.textfieldProps?.name}"`
        } ${
          dataChildren?.textfieldProps?.label &&
          `label="${dataChildren?.textfieldProps?.label}"`
        } ${
          dataChildren?.textfieldProps?.placeholder &&
          `placeholder="${dataChildren?.textfieldProps?.placeholder}"`
        } ${
          dataChildren?.selectProps?.status &&
          `status="${dataChildren?.selectProps?.status}"`
        } ${
          dataChildren?.selectProps?.size &&
          `size="${dataChildren?.selectProps?.size}"`
        } ${dataChildren?.switchChecked?.fullwidth ? "fullwidh" : ""} ${
          dataChildren?.switchChecked?.disabled ? "disabled" : ""
        } ${dataChildren?.switchChecked?.required ? "required" : ""} ${
          dataChildren?.switchChecked?.readonly ? "readonly" : ""
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
