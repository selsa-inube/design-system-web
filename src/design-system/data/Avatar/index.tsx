import { MdOutlineSettings } from "react-icons/md";
import { Avatar, Stack, Text } from "@inube/design-system";
import {
  StyledCode,
  StyledComponentWord,
  StyledReservedWord,
  StyledStringDeclaration,
} from "./styles";
import { DetailsSection } from "../../../components/data/DetailsSection";

export const TempleteAvatar = () => {
  return (
    <>
      <DetailsSection
        section="Avatar"
        descriptionSection="An avatar is a visual representation of a user or entity."
      />
      Ta
      <Stack direction="column" gap="64px" margin="s400">
        <Stack direction="column" gap="16px">
          <Stack direction="column">
            <Text as="h2" type="title">
              Description
            </Text>
          </Stack>
          <Stack direction="column">
            <Text direction="column">
              An avatar acts as a proxy for a user or entity (such as a project,
              repository, or space), in a product. They're often combined with
              status or presence indicators to give more context. Users
              generally upload their own image, otherwise, a default image is
              displayed.
            </Text>
          </Stack>
          <Stack direction="column">
            <Stack margin="s0 s0 s200 s0">
              <Avatar />
            </Stack>
            <Stack>
              <StyledCode>
                <StyledReservedWord>import </StyledReservedWord>
                <StyledComponentWord>{"{ Avatar } "}</StyledComponentWord>
                <StyledReservedWord>from </StyledReservedWord>
                <StyledStringDeclaration>
                  "@inube/design-system"{" "}
                </StyledStringDeclaration>

                <Stack>
                  <StyledReservedWord>export const </StyledReservedWord>
                  <StyledComponentWord>
                    {"AvatarDefaultExample "}
                  </StyledComponentWord>
                  <StyledReservedWord>{"= () => "}</StyledReservedWord>

                  <StyledComponentWord>{"<Avatar />"}</StyledComponentWord>

                  <StyledReservedWord>;</StyledReservedWord>
                </Stack>
              </StyledCode>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" gap="16px">
          <Stack direction="column">
            <Text as="h2" type="title">
              Props
            </Text>
          </Stack>
          <Stack gap="8px">
            <Text size="medium">icon: ReactNode;</Text>
            <Text appearance="gray" size="medium">
              icon that will be displayed inside of avatar-component
            </Text>
          </Stack>

          <Stack direction="column">
            <Stack margin="s0 s0 s200 s0">
              <Avatar icon={<MdOutlineSettings />} />
            </Stack>
            <Stack>
              <StyledCode>
                <StyledReservedWord>import </StyledReservedWord>
                <StyledComponentWord>{"{ Avatar } "}</StyledComponentWord>
                <StyledReservedWord>from </StyledReservedWord>
                <StyledStringDeclaration>
                  "@inube/design-system"{" "}
                </StyledStringDeclaration>

                <Stack>
                  <StyledReservedWord>export const </StyledReservedWord>
                  <StyledComponentWord>
                    {"AvatarDefaultExample "}
                  </StyledComponentWord>
                  <StyledReservedWord>{"= () => "}</StyledReservedWord>

                  <StyledComponentWord>
                    {"<Avatar "}
                    <StyledReservedWord>icon={"{"}</StyledReservedWord>
                    <StyledComponentWord>
                      {"<MdOutlineSettings />"}
                    </StyledComponentWord>
                    <StyledReservedWord>{"}"}</StyledReservedWord>
                    {"/>"}
                  </StyledComponentWord>

                  <StyledReservedWord>;</StyledReservedWord>
                </Stack>
              </StyledCode>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
