import { Avatar, Stack, Text } from "@inube/design-system";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { optionsAvatar } from "./data";
import { useState } from "react";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { ItextfieldProps } from "./types";

export const PlaygroundAvatar = () => {
  const [valuesProps, setValuesProps] = useState<
    IvaluesProps<undefined, ItextfieldProps>
  >({
    textfieldProps: {
      icon: "MdOutlineAccountCircle",
    },
  });
  const handleValuesProps = (
    data: IvaluesProps<undefined, ItextfieldProps>
  ) => {
    setValuesProps(data);
  };
  return (
    <Stack direction="column" gap="64px" margin="s400">
      <Stack direction="column" gap="16px">
        <Stack direction="column">
          <Text as="h2" type="title">
            Description
          </Text>
        </Stack>
        <Stack direction="column">
          <Text appearance="gray" size="medium">
            When not specified or due to an error the icon does not load, the
            component will default to the MdPersonOutline icon from
            react-icon-md.
          </Text>
        </Stack>
        <Stack direction="column" margin="s400 s0 s0 s0">
          <Stack margin="s0 s0 s200 s200">
            <Avatar />
          </Stack>

          <SyntaxHighlighter
            showLineNumbers
            customStyle={{ borderRadius: "10px" }}
            language="javascript"
            style={darcula}
          >
            {`import { Avatar } from "@inube/design-system";

export const AvatarDefaultExample = () => <Avatar icon={<MdOutlineAccountCircle/>} />;`}
          </SyntaxHighlighter>

          <ControlsProps
            options={optionsAvatar}
            valuesProps={valuesProps}
            sendFatherData={handleValuesProps}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};