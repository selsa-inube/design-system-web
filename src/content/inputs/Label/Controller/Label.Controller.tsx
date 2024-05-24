import { Label, ILabel } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

const LabelController = (props: ILabel) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="150px">
      <Label {...props} />
    </Stack>
  );
};

export { LabelController };
