import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { StyledContainerTitle } from "./styles";
import { Cards } from "@components/feedback/cards-components";
import { cardsData } from "../../data/cards";

function Main() {
  return (
    <Stack direction="column" gap="32px">
      <Stack gap="32px">
        <StyledContainerTitle>
          <Stack direction="column" gap="8px">
            <Text type="display" size="medium">
              Components
            </Text>
            <Text type="title" appearance="gray">
              The components are individual elements, capable of transforming
              according to need and together they create our design system.
            </Text>
          </Stack>
        </StyledContainerTitle>
        <img src="/svg/settings.svg" alt="settings" />
      </Stack>
      <Cards cards={cardsData} />
    </Stack>
  );
}

export { Main };
