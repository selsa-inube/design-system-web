import { Grid, IGrid } from "@inubekit/grid";
import { StyledSquare } from "./Grid.Controller.styles";

const GridController = (props: IGrid) => {
  return (
    <Grid {...props}>
      <StyledSquare>Item 1</StyledSquare>
      <StyledSquare>Item 2</StyledSquare>
      <StyledSquare>Item 3</StyledSquare>
    </Grid>
  );
};

export { GridController };
