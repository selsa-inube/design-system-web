import { Text, Textfield } from "@inube/design-system";
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "./styles";

const optionsAvatar = [
  {
    nameProps: "icon",
    typeControl: "Textfield",
  },
];

export const ControlsPlaygroundAvatar = () => {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledTableCell>
            <Text as="span" ellipsis type="title" size="medium">
              Name
            </Text>
          </StyledTableCell>
          <StyledTableCell>
            <Text as="span" ellipsis type="title" size="medium">
              Controls
            </Text>
          </StyledTableCell>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {optionsAvatar.map((option) => (
          <StyledTableRow key={option.nameProps}>
            <StyledTableCell>
              <Text as="span" ellipsis>
                {option.nameProps}
              </Text>
            </StyledTableCell>
            <StyledTableCell>
              {option.typeControl === "Textfield" && (
                <Textfield
                  id={option.nameProps}
                  name={option.nameProps}
                  fullwidth
                />
              )}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
