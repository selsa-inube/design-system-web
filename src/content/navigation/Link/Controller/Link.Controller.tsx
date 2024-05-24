import { Link, ILink } from "@inubekit/link";
import { Stack } from "@inubekit/stack";

const LinkController = (props: ILink) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="150px">
      <Link {...props} />
    </Stack>
  );
};

export { LinkController };
