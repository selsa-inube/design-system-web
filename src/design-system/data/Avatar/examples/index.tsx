import { Avatar, Stack, Text } from "@inube/design-system";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ControlsPlaygroundAvatar } from "@components/data/ControlsPlaygroundAvatar";

export const DescriptionTemplete = () => {
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
          <Stack>
            <SyntaxHighlighter
              language="javascript"
              style={darcula}
              children={`import { Avatar } from "@inube/design-system";
export const AvatarDefaultExample = () => <Avatar />;`}
            ></SyntaxHighlighter>
          </Stack>
          <Stack>
            <ControlsPlaygroundAvatar />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
