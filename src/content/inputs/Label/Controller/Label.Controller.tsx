import { Label, ILabel } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

const LabelController = (props: ILabel) => {
  return (
    <Stack justifyContent="center">
      <Label {...props} />
    </Stack>
  );
};

export { LabelController };
