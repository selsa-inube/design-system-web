import { Header, Grid, Nav, useMediaQuery } from "@inube/design-system";
import { navItems } from "./config/apps.config";
import { StyledContainerNav } from "./styles";

export const Home = () => {
  const tablet = useMediaQuery("(max-width: 944px)");

  return (
    <Grid
      templateColumns="1fr"
      templateRows="1fr"
      margin="s0"
      width="100%"
      heigth="100%"
    >
      <Header portalId="portals" navigation={navItems} />
      {!tablet && (
        <StyledContainerNav>
          <Nav navigation={navItems} logoutPath="/" />
        </StyledContainerNav>
      )}
    </Grid>
  );
};
