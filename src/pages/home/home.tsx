import { Header, Grid, Nav } from "@inube/design-system";
import { navItems } from "./config/apps.config";
import { StyledContainerNav } from "./styles";

export const Home = () => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="1fr"
      margin="s0"
      width="100%"
      heigth="100%"
    >
      <Header />
      <StyledContainerNav>
        <Nav navigation={navItems} logoutPath="/" />
      </StyledContainerNav>
    </Grid>
  );
};
