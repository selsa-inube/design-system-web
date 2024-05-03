import { Grid, Text } from "@inube/design-system";
import { SectionMessage } from "@inubekit/sectionmessage";
import { Stack } from "@inubekit/stack";
import { MdOutlineInfo } from "react-icons/md";

function Theming() {
  return (
    <Grid
      gap="s400"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="s300 s0 s0 s0"
    >
      <Stack direction="column" gap="8px">
        <Text type="headline" size="small" children="How to read tokens" />
        <Text
          type="body"
          size="large"
          appearance="gray"
          children="Tokens are separated by elements that range from the generic to the most detailed."
        />
      </Stack>
      <SectionMessage
        description="Some of the tokens are defined by values ​​and others by references. When we use references it is because it depends on importing other components."
        icon={<MdOutlineInfo />}
        title=""
        duration={0}
        closeSectionMessage={() => {}}
        appearance={"primary"}
        isMessageResponsive={false}
      />
    </Grid>
  );
}

export { Theming };
