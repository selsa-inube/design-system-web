/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useOutlet } from "react-router-dom";
import { Grid } from "@inube/design-system";
import { Nav } from "@inubekit/nav";
import { Header } from "@inubekit/header";
import { useMediaQuery } from "@inubekit/hooks";
import { navigation } from "./navigation";
import { StyledRoot, StyledMain, StyledNavContainer } from "./styles";
import { Logo } from "../../content/navigation/Header/logo";
import { useEffect, useState } from "react";
import { Main } from "@pages/Main";

function Root() {
  const smallScreen = useMediaQuery("(max-width: 849px)");
  const outlet = useOutlet();
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    if (outlet) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, [outlet]);

  return (
    <StyledRoot>
      <Header
        portalId="portals"
        logoURL={<Logo />}
        navigation={navigation}
        showUser={false}
      />

      <Grid
        templateColumns={smallScreen ? "1fr" : "auto 1fr"}
        alignContent="unset"
      >
        {!smallScreen && (
          <StyledNavContainer>
            <Nav navigation={navigation as any} collapse />
          </StyledNavContainer>
        )}
        <StyledMain>{hasContent ? <Outlet /> : <Main />}</StyledMain>
      </Grid>
    </StyledRoot>
  );
}

export { Root };
