import { Divider, IDivider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";

const DividerController = (props: IDivider) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="150px">
      <Divider {...props} />
    </Stack>
  );
};

export { DividerController };
