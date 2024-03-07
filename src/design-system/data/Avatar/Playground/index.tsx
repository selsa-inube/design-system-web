import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { ItextfieldProps } from "./types";
import { optionsAvatar } from "./data";

export const PlaygroundAvatar = () => {
  const [valuesProps, setValuesProps] = useState<
    IvaluesProps<undefined, ItextfieldProps>
  >({
    textfieldProps: {
      icon: "MdOutlineAccountCircle",
    },
  });
  const handleValuesProps = (
    data: IvaluesProps<undefined, ItextfieldProps>,
  ) => {
    setValuesProps(data);
  };
  return (
    <Stack direction="column" gap="64px" margin="32px">
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
        <Stack direction="column" margin="32px 0 0 0">
          <Stack margin="0 0 16px 16px">
            <Avatar />
          </Stack>

          <SyntaxHighlighter
            showLineNumbers
            customStyle={{ borderRadius: "10px" }}
            language="javascript"
            style={darcula}
          >
            {`import { Avatar } from "@inube/design-system";

export const ComponentAvatar = () => <Avatar icon={<MdOutlineAccountCircle/>} />;`}
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
