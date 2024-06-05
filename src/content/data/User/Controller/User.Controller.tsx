import { User, IUser } from "@inubekit/user";
import { Stack } from "@inubekit/stack";

const UserController = (props: IUser) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <User {...props} />
    </Stack>
  );
};

export { UserController };
