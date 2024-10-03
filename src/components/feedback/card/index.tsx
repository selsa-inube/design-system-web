import { StyledLink } from "./styles";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

interface ICard {
  path: string;
  title?: string;
  description?: string;
}

const Card = (props: ICard) => {
  const { path, title, description } = props;

  return (
    <StyledLink to={path}>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        height="100%"
        justifyContent="space-between"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          height="170px"
        ></Stack>

        <Stack direction="column" gap="6px">
          <Text as="h2">{title}</Text>
          <Text appearance="gray" size="medium">
            {description}
          </Text>
        </Stack>
      </Stack>
    </StyledLink>
  );
};

export { Card };
export type { ICard };
