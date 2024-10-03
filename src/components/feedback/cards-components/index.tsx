import { Card, ICard } from "../card";
import { Grid } from "@inubekit/grid";

interface ICards {
  cards: ICard[];
}

const Cards = (props: ICards) => {
  const { cards } = props;
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap="32px"
      autoRows="minmax(150px, auto)"
    >
      {cards.map((card) => (
        <Card
          key={card.title}
          path={card.path}
          title={card.title}
          description={card.description}
        />
      ))}
    </Grid>
  );
};

export { Cards };
