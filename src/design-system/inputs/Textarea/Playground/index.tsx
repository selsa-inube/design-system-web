import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Textarea } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { options } from "./data";
import { IselectProps, IswitchProps, ItextfielProps } from "./types";

export const PlaygroundTextarea = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfielProps, IswitchProps>
  >({
    selectProps: {
      status: "pending",
    },
    textfieldProps: {
      id: "id",
      name: "name",
      label: "label",
      placeholder: "placeholder",
      value: "",

      lengthThreshold: "10",
      maxLength: "200",
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDataChildren({
      ...dataChildren,
      textfieldProps: {
        ...dataChildren.textfieldProps,
        value: e.target.value,
      },
    });
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <Textarea
          id={dataChildren?.textfieldProps?.id}
          name={dataChildren?.textfieldProps?.name}
          label={dataChildren?.textfieldProps?.label}
          placeholder={dataChildren?.textfieldProps?.placeholder}
          fullwidth={dataChildren?.switchChecked?.fullwidth}
          disabled={dataChildren?.switchChecked?.disabled}
          required={dataChildren?.switchChecked?.required}
          readonly={dataChildren?.switchChecked?.readonly}
          value={dataChildren?.textfieldProps?.value}
          status={dataChildren?.textfieldProps?.status}
          lengthThreshold={dataChildren?.textfieldProps?.lengthThreshold}
          maxLength={dataChildren?.textfieldProps?.maxLength}
          onChange={onChange}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Textarea } from "@inube/design-system";

export const ComponentTextarea = () => <Textarea  ${
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
        } 
        ${dataChildren?.switchChecked?.fullwidth ? "fullwidh" : ""} ${
          dataChildren?.switchChecked?.disabled ? "disabled" : ""
        } ${dataChildren?.switchChecked?.required ? "required" : ""} ${
          dataChildren?.switchChecked?.readonly ? "readonly" : ""
        } ${
          dataChildren?.textfieldProps?.lengthThreshold &&
          `lengthThreshold="${dataChildren?.textfieldProps?.lengthThreshold}"`
        }   ${
          dataChildren?.textfieldProps?.maxLength &&
          `maxLength="${dataChildren?.textfieldProps?.maxLength}"`
        }/>;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
