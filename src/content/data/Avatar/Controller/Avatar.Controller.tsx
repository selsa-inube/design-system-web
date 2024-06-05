import { Avatar } from "@inubekit/avatar";
import { Stack } from "@inubekit/stack";

const AvatarController = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="150px"
      width="100%"
    >
      <Avatar />
    </Stack>
  );
};

export { AvatarController };
