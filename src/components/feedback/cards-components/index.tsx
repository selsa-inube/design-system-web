import { Stack } from "@inubekit/stack";
import { Card } from "../card";

const cards = [
  {
    path: "avatar",
    title: "Avatar",
    description:
      "The Avatar component is used to display a user's profile picture.",
  },
];

export const CardsComponents = () => {
  return (
    <Stack margin="32px" gap="8px">
      {cards.map((card) => (
        <Card
          key={card.title}
          path={card.path}
          title={card.title}
          description={card.description}
        />
      ))}
    </Stack>
  );
};
