import { Outlet } from "react-router-dom";

import { Header, Grid, Nav, useMediaQuery, Stack } from "@inube/design-system";

import { DetailsSection } from "../../components/data/DetailsSection";
import { navItems } from "./config/apps.config";
import {
  StyledAppPage,
  StyledContainer,
  StyledMain,
  StyledContainerNav,
} from "./styles";

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
              <Stack direction="column" margin="s0 s0 s100">
                <DetailsSection section={location.pathname.split("/").pop()} />
                <Stack margin="s200 s400"></Stack>
                <Outlet />
              </Stack>
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};
