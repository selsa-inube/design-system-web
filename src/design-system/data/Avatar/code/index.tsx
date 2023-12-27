import { Stack, Text } from "@inube/design-system";
import { InformationsProps } from "../../../../components/data/InformationProps";

export const CodeAvatar = () => (
  <>
    <Stack direction="column" margin="s400">
      <Text as="h3" type="title">
        Props
      </Text>
    </Stack>

    <Stack direction="column" gap="16px" margin="s400">
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
