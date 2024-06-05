import { SectionMessage, ISectionMessage } from "@inubekit/sectionmessage";
import { Stack } from "@inubekit/stack";
import { StyledContainerSectionMessage } from "./styles";

const SectionMessageController = (props: ISectionMessage) => {
  return (
    <Stack alignItems="center" width="100%">
      <StyledContainerSectionMessage>
        <SectionMessage {...props} />
      </StyledContainerSectionMessage>
    </Stack>
  );
};

export { SectionMessageController };
