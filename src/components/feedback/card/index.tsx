import { StyledLink } from "./styles";
import { Stack, Text } from "@inube/design-system";

interface CardProps {
  path: string;
  URLimg?: string;
  title?: string;
  description?: string;
}

export const Card = (props: CardProps) => {
  const { path, URLimg, title, description } = props;

  return (
    <Stack direction="column" alignItems="center" width="fit-content">
      <StyledLink to={path}>
        <Stack direction="column" width="-webkit-fill-available">
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="150px"
          >
            <img src={URLimg} />
          </Stack>
          <Text as="h2" margin="0 0 8px 0">
            {title}
          </Text>
        </Stack>
        <Stack direction="column" width="-webkit-fill-available">
          <Text appearance="gray" size="medium" padding="0 0 8px 0">
            {description}
          </Text>
        </Stack>
      </StyledLink>
    </Stack>
  );
};
