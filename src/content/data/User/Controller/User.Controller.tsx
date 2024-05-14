import { User, IUser } from "@inubekit/user";
import { Stack } from "@inubekit/stack";

const UserController = (props: IUser) => {
  return (
    <Stack justifyContent="center">
      <User {...props} />
    </Stack>
  );
};

export { UserController };
