import { Outlet, useLocation } from "react-router-dom";

import { Header, Grid, Nav, useMediaQuery, Stack } from "@inube/design-system";

import { DetailsSection } from "@components/data/DetailsSection";
import { navItems } from "./config/apps.config";
import {
  StyledAppPage,
  StyledContainer,
  StyledMain,
  StyledContainerNav,
} from "./styles";

const capitalizeFirstLetter = (string?: string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

export const Home = () => {
  const smallScreen = useMediaQuery("(max-width: 849px)");
  const location = useLocation();
  const datailsSection = location.pathname.split("/").pop();
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
                <DetailsSection
                  section={capitalizeFirstLetter(datailsSection)}
                />

                <Outlet />
              </Stack>
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};
