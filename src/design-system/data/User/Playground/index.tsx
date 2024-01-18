import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { User } from "@inube/design-system";
import { Stack } from "@inube/design-system";
import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { optionsUser } from "./data";
import { useState } from "react";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { IselectProps, ItextfieldProps } from "./types";
export const PlaygroundUser = () => {
  const [valuesProps, setValuesProps] = useState<
    IvaluesProps<IselectProps, ItextfieldProps>
  >({
    selectProps: {
      size: "large",
    },
    textfieldProps: {
      userName: "Leonardo Garzón",
      client: "Sistemas Enlínea S.A",
    },
  });
  const handleValuesProps = (
    data: IvaluesProps<IselectProps, ItextfieldProps>
  ) => {
    setValuesProps(data);
  };
  return (
    <Stack direction="column" gap="20px" margin="s400">
      <Stack>
        <User
          userName={valuesProps?.textfieldProps?.userName}
          client={valuesProps?.textfieldProps?.client}
          size={valuesProps?.selectProps?.size}
        />
      </Stack>
      <SyntaxHighlighter
        showLineNumbers
        customStyle={{ borderRadius: "10px" }}
        language="javascript"
        style={darcula}
      >
        {`import { User } from "@inube/design-system";

export const UserDefaultExample = () => <User userName="${valuesProps?.textfieldProps?.userName} " client="${valuesProps?.textfieldProps?.client} " size="${valuesProps?.selectProps?.size}" />;`}
      </SyntaxHighlighter>
      <ControlsProps
        options={optionsUser}
        valuesProps={valuesProps}
        sendFatherData={handleValuesProps}
      />
    </Stack>
  );
};
