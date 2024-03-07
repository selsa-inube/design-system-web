import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { InformationsProps } from "@components/data/InformationProps";

export const CodeAvatar = () => (
  <>
    <Stack direction="column" margin="32px">
      <Text as="h3" type="title">
        Props
      </Text>
    </Stack>

    <Stack direction="column" gap="16px" margin="32px">
      <Stack>
        <InformationsProps
          nameProps="icon"
          description="Icon that will be displayed inside of avatar-component"
          type="React.ReactElement"
        />
      </Stack>
    </Stack>
  </>
);
