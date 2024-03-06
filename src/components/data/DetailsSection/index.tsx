import { Stack } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
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
      <Stack height="100%" padding="s0 s400">
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
      </Stack>
    </StyledContainer>
  );
};
