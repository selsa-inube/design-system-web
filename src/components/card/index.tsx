import { StyledContainer } from "./styles";
import { Text } from "@inube/design-system";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
}

export const Card = (props: CardProps) => {
  const { image, title, description } = props;

  return (
    <StyledContainer>
      <img src={image} />
      <Text as="h2">{title}</Text>
      <Text>{description}</Text>
    </StyledContainer>
  );
};
