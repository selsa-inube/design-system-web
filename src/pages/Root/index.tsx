/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { Grid, Header } from "@inube/design-system";
import { Nav } from "@inubekit/nav";
import { useMediaQuery } from "@inubekit/hooks";
import { navigation } from "./navigation";
import { StyledRoot, StyledMain } from "./styles";
import { Logo } from "../../content/navigation/Header/logo";

function Root() {
  const smallScreen = useMediaQuery("(max-width: 849px)");

  return (
    <StyledRoot>
      <Header portalId="portals" logoURL={<Logo />} navigation={navigation} />
      <Grid
        templateColumns={smallScreen ? "1fr" : "auto 1fr"}
        alignContent="unset"
      >
        {!smallScreen && (
          <Nav
            navigation={navigation as any}
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
