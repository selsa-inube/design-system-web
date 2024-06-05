import { Spinner, ISpinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";

const SpinnerController = (props: ISpinner) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <Spinner {...props} />
    </Stack>
  );
};

export { SpinnerController };
