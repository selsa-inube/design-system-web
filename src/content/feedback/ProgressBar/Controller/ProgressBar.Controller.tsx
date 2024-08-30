import { ProgressBar, IProgressBar } from "@inubekit/progressbar";
import { Stack } from "@inubekit/stack";

const ProgressBarController = (props: IProgressBar) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <ProgressBar {...props} />
    </Stack>
  );
};

export { ProgressBarController };
