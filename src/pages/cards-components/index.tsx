import { Stack } from "@inube/design-system";

import { Card } from "../../components/feedback/card";

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
    <Stack margin="s400" gap="8pxs">
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
