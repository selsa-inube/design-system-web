import { Nav, INav } from "@inubekit/nav";
import { StyledNavContainer } from "./Nav.Controller.Styles";

const NavController = (props: INav) => {
  return (
    <StyledNavContainer>
      <Nav {...props} />
    </StyledNavContainer>
  );
};

export { NavController };
