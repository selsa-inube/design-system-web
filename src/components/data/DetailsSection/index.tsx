import { Grid, Stack, Text, useMediaQuery } from "@inube/design-system";
import { StyledContainer } from "./styles";

interface DetailsSectionProps {
  section?: string;
  descriptionSection?: string;
  URLimg?: string;
}

export const DetailsSection = (props: DetailsSectionProps) => {
  const { section, descriptionSection, URLimg } = props;

  const movilScreen = useMediaQuery("(max-width: 849px)");
  return (
    <StyledContainer>
      <Grid
        templateColumns={!movilScreen ? "1fr auto" : "1fr"}
        height="inherit"
        gap="s400"
        padding="s200"
      >
        <Stack direction="column" justifyContent="center">
          <Text as="h1" type="headline">
            {section}
          </Text>
          <Text appearance="gray">{descriptionSection}</Text>
        </Stack>
        {!movilScreen && (
          <Stack alignItems="center">
            <img src={URLimg} alt="" />
          </Stack>
        )}
      </Grid>
    </StyledContainer>
  );
};
