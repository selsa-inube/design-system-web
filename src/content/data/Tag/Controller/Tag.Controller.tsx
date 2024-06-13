import { Tag, ITag } from "@inubekit/tag";
import { Stack } from "@inubekit/stack";

const TagController = (props: ITag) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="150px"
      width="100%"
    >
      <Tag {...props} />
    </Stack>
  );
};

export { TagController };
