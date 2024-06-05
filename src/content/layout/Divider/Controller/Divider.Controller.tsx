import { Divider, IDivider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";

const DividerController = (props: IDivider) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <Divider {...props} />
    </Stack>
  );
};

export { DividerController };
