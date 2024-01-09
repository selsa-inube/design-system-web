import { Select, Text, Textfield } from "@inube/design-system";

import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "./styles";
import { useState } from "react";

const appearanceOptions = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
];

const options = [
  {
    nameProps: "appearance",
    typeControl: "Select",
    value: "info",
    options: appearanceOptions.map((appearanceOption) => ({
      id: appearanceOption,
      label: appearanceOption,
      disabled: false,
    })),
  },
  /*  {
    nameProps: "prueba",
    typeControl: "Select",
    value: "dark",
    options: appearanceOptions.map((appearanceOption) => ({
      id: appearanceOption,
      label: appearanceOption,
      disabled: false,
    })),
  }, */
];

export const ControlsPlayground = () => {
  const [values, setValues] = useState({ appearance: "dark" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setValues({ ...values, [e.target.id]: e.target.outerText });
  };
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
        {options.map((option) => (
          <StyledTableRow key={option.nameProps}>
            <StyledTableCell>
              <Text as="span" ellipsis>
                {option.nameProps}
              </Text>
            </StyledTableCell>
            <StyledTableCell>
              {option.typeControl === "Select" && (
                <Select
                  id={option.nameProps}
                  name={option.nameProps}
                  fullwidth
                  options={option.options}
                  onChange={onChange}
                  value={values}
                />
              )}
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
