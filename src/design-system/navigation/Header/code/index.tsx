import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { InformationsProps } from "@components/data/InformationProps";
import { parameters } from "./parameters";

export const CodeHeader = () => (
  <>
    <Stack direction="column" margin="32px">
      <Text as="h3" type="title">
        Props
      </Text>
    </Stack>

    {parameters.map((parameter) => (
      <Stack
        key={parameter.nameProps}
        direction="column"
        gap="16px"
        margin="32px"
      >
        <Stack>
          <InformationsProps
            nameProps={parameter.nameProps}
            description={parameter.description}
            type={parameter.type}
          />
        </Stack>
      </Stack>
    ))}
  </>
);
