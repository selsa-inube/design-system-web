import { Header, Grid, Nav, useMediaQuery } from "@inube/design-system";
import { navItems } from "./config/apps.config";
import {
  StyledAppPage,
  StyledContainer,
  StyledMain,
  StyledContainerNav,
} from "./styles";
import { Card } from "../../components/feedback/card";

export const Home = () => {
  const smallScreen = useMediaQuery("(max-width: 849px)");
  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header portalId="portals" navigation={navItems} />
        <StyledContainer>
          <Grid
            templateColumns={smallScreen ? "1fr" : "auto 1fr"}
            alignContent="unset"
          >
            {!smallScreen && (
              <StyledContainerNav>
                <Nav
                  navigation={navItems}
                  logoutPath="/"
                  logoutTitle="Cerrar Sesión"
                />
              </StyledContainerNav>
            )}

            <StyledMain>
              <Card
                URLimg="./inube.png"
                title="Avatar"
                description="An avatar is a visual representation of a user or entity."
              />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};
