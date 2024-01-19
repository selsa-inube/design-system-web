import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Textfield } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, ItextfieldProps, IswitchChecked } from "./type";
import { options } from "./data";

export const PlaygroundTextfield = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    selectProps: {
      type: "text",
      status: "pending",
      size: "compact",
    },
    textfieldProps: {
      id: "id",
      label: "label",
      name: "name",
      placeholder: "placeholder",
      value: "",
    },
    switchChecked: {
      fullwidth: false,
      disabled: false,
      required: false,
      readOnly: false,
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataChildren({
      ...dataChildren,
      textfieldProps: {
        ...dataChildren.textfieldProps,
        value: e.target.value,
      },
    });
  };

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>,
  ) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <Textfield
          id={dataChildren?.textfieldProps?.id}
          label={dataChildren?.textfieldProps?.label}
          name={dataChildren?.textfieldProps?.name}
          placeholder={dataChildren?.textfieldProps?.placeholder}
          value={dataChildren?.textfieldProps?.value}
          type={dataChildren?.selectProps?.type}
          status={dataChildren?.selectProps?.status}
          size={dataChildren?.selectProps?.size}
          fullwidth={dataChildren?.switchChecked?.fullwidth}
          disabled={dataChildren?.switchChecked?.disabled}
          required={dataChildren?.switchChecked?.required}
          readOnly={dataChildren?.switchChecked?.readOnly}
          onChange={onChange}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Icon } from "@inube/design-system";

export const ComponentIcon = () => <Textfield ${
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
          dataChildren?.selectProps?.type &&
          `type="${dataChildren?.selectProps?.type}"`
        } ${
          dataChildren?.selectProps?.status &&
          `status="${dataChildren?.selectProps?.status}"`
        } ${
          dataChildren?.selectProps?.size &&
          `size="${dataChildren?.selectProps?.size}"`
        } ${dataChildren?.switchChecked?.fullwidth ? "fullwidth" : ""} ${
          dataChildren?.switchChecked?.disabled ? "disabled" : ""
        } ${dataChildren?.switchChecked?.readOnly ? "readOnly" : ""} ${
          dataChildren?.switchChecked?.readOnly ? "required" : ""
        }  />;`}
      </SyntaxHighlighter>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
