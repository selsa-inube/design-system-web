import { Outlet } from "react-router-dom";
import { Grid, Header, Nav } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { navigation } from "./navigation";

import { StyledRoot, StyledMain } from "./styles";

function Root() {
  const smallScreen = useMediaQuery("(max-width: 849px)");

  return (
    <StyledRoot>
      <Header portalId="portals" navigation={navigation} />
      <Grid
        templateColumns={smallScreen ? "1fr" : "auto 1fr"}
        alignContent="unset"
      >
        {!smallScreen && (
          <Nav
            navigation={navigation}
            logoutPath="/"
            logoutTitle="Cerrar Sesión"
          />
        )}
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Grid>
    </StyledRoot>
  );
}

export { Root };
