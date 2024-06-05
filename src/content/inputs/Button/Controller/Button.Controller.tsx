import { Button, IButton } from "@inubekit/button";
import { Stack } from "@inubekit/stack";

const ButtonController = (props: IButton) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <Button {...props} />
    </Stack>
  );
};

export { ButtonController };
