import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdOutlineAccountCircle } from "react-icons/md";

import { Stack } from "@inube/design-system";
import { Icon } from "@inubekit/icon";
import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, ItextfieldProps, IswitchChecked } from "./types";
import { options } from "./data";

export const PlaygroundIcon = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps, IswitchChecked>
  >({
    selectProps: {
      appearance: "primary",
      spacing: "wide",
      variant: "filled",
      shape: "circle",
    },
    textfieldProps: { size: "24px" },
    switchChecked: {
      cursorHover: false,
      disabled: false,
      parentHover: false,
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
        <Icon
          appearance={dataChildren?.selectProps?.appearance!}
          icon={<MdOutlineAccountCircle />}
          size={dataChildren?.textfieldProps?.size}
          variant={dataChildren?.selectProps?.variant}
          shape={dataChildren?.selectProps?.shape}
          spacing={dataChildren?.selectProps?.spacing}
          disabled={dataChildren?.switchChecked?.disabled}
          parentHover={dataChildren?.switchChecked?.parentHover}
          cursorHover={dataChildren?.switchChecked?.cursorHover}
        />
      </Stack>

      <SyntaxHighlighter
        language="tsx"
        style={darcula}
        customStyle={{ borderRadius: "10px" }}
        showLineNumbers
      >
        {`import { Icon } from "@inube/design-system";

export const ComponentIcon = () => <Icon appearance="${dataChildren?.selectProps
          ?.appearance}" icon={<MdOutlineAccountCircle />}  ${
          dataChildren?.selectProps?.variant &&
          `variant="${dataChildren.selectProps.variant}" ${
            dataChildren?.selectProps?.shape &&
            `shape="${dataChildren?.selectProps?.shape}" ${
              dataChildren?.selectProps?.spacing &&
              `spacing="spacing="${dataChildren?.selectProps?.spacing}" ${
                dataChildren?.textfieldProps?.size &&
                `size="${dataChildren?.textfieldProps?.size}" ${
                  dataChildren?.switchChecked?.disabled ? "disabled" : ""
                } ${
                  dataChildren?.switchChecked?.parentHover ? "parentHover" : ""
                } ${
                  dataChildren?.switchChecked?.cursorHover ? "cursorHover" : ""
                }`
              }`
            }`
          } `
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
