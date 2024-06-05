import { CountdownBar, ICountdownBar } from "@inubekit/countdownbar";
import { Stack } from "@inubekit/stack";

const CountdownBarController = (props: ICountdownBar) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <CountdownBar {...props} />
    </Stack>
  );
};

export { CountdownBarController };
