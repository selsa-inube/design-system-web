import { Grid } from "@inubekit/grid";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";

function UnderConstruction() {
  return (
    <Grid
      gap="20px"
      autoRows="unset"
      alignContent="center"
      justifyContent="center"
      margin="48px 0 0 0"
      justifyItems="center"
    >
      <img src="/svg/under-construction.svg" alt="Under Construction" />
      <Text type="headline" appearance="dark" size="medium">
        Oops! Under construction
      </Text>
      <Text type="title" appearance="gray">
        The component is currently in design and development.
      </Text>
      <Button type="link" path="/" appearance="primary" children="Home" />
    </Grid>
  );
}

export { UnderConstruction };
