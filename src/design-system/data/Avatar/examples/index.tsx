import { MdOutlineSettings } from "react-icons/md";
import { Avatar, Stack, Text } from "@inube/design-system";
import {
  StyledCode,
  StyledComponentWord,
  StyledReservedWord,
  StyledStringDeclaration,
} from "./styles";
import { DetailsSection } from "../../../../components/data/DetailsSection";

export const DescriptionTemplete = () => {
  return (
    <>
      <DetailsSection
        section="Avatar"
        descriptionSection="An avatar is a visual representation of a user or entity."
      />

      <Stack direction="column" gap="64px" margin="s400">
        <Stack direction="column" gap="16px">
          <Stack direction="column">
            <Text as="h2" type="title">
              Description
            </Text>
          </Stack>
          <Stack direction="column">
            <Text appearance="gray" size="medium">
              When not specified or due to an error the icon does not load, the
              component will default to the MdPersonOutline icon from
              react-icon-md.
            </Text>
          </Stack>
          <Stack direction="column" margin="s400 s0 s0 s0">
            <Stack margin="s0 s0 s200 s200">
              <Avatar />
            </Stack>
            <Stack>
              <StyledCode>
                <StyledReservedWord>import </StyledReservedWord>
                <StyledComponentWord>{"{ Avatar } "}</StyledComponentWord>
                <StyledReservedWord>from </StyledReservedWord>
                <StyledStringDeclaration>
                  "@inube/design-system"
                </StyledStringDeclaration>
                <StyledReservedWord>;</StyledReservedWord>

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
              icon
            </Text>
          </Stack>
          <Stack gap="8px">
            <Text appearance="gray" size="medium">
              the icon can be updated, it receives the element to render it.
            </Text>
          </Stack>

          <Stack direction="column" margin="s400 s0 s0 s0">
            <Stack margin="s0 s0 s200 s200">
              <Avatar icon={<MdOutlineSettings />} />
            </Stack>
            <Stack>
              <StyledCode>
                <StyledReservedWord>import </StyledReservedWord>
                <StyledComponentWord>{"{ Avatar } "}</StyledComponentWord>
                <StyledReservedWord>from </StyledReservedWord>
                <StyledStringDeclaration>
                  "@inube/design-system"
                </StyledStringDeclaration>
                <StyledReservedWord>;</StyledReservedWord>

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
                    {" />"}
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
