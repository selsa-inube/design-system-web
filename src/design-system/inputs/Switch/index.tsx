import { Stack, Text } from "@inube/design-system";
import { parameters } from "./parameters";
import { InformationsProps } from "../../../components/data/InformationProps";

export const PageCodeSwitch = () => (
  <>
    <Stack direction="column" margin="s400">
      <Text as="h3" type="title">
        Props
      </Text>
    </Stack>

    {parameters.map((parameter) => (
      <Stack
        key={parameter.nameProps}
        direction="column"
        gap="16px"
        margin="s400"
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
