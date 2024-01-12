import { useState } from "react";
import { Select, Switch, Text, Textfield } from "@inube/design-system";

import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "./styles";

const appearanceOptions: readonly string[] = [
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

const spacingOptions: readonly string[] = ["wide", "compact", "none"];

const variant: readonly string[] = ["filled", "outlined", "none"];

const shape: readonly string[] = ["circle", "rectangle"];

const options = [
  {
    nameProps: "appearance",
    typeControl: "Select",
    option: appearanceOptions.map((appearanceOption) => ({
      id: appearanceOption,
      label: appearanceOption,
      disabled: false,
    })),
  },
  {
    nameProps: "spacing",
    typeControl: "Select",
    option: spacingOptions.map((spacingOption) => ({
      id: spacingOption,
      label: spacingOption,
      disabled: false,
    })),
  },
  {
    nameProps: "variant",
    typeControl: "Select",
    option: variant.map((variantOption) => ({
      id: variantOption,
      label: variantOption,
      disabled: false,
    })),
  },
  {
    nameProps: "shape",
    typeControl: "Select",
    option: shape.map((shapeOption) => ({
      id: shapeOption,
      label: shapeOption,
      disabled: false,
    })),
  },
  {
    nameProps: "size",
    typeControl: "Textfield",
  },
  {
    nameProps: "fullwidth",
    typeControl: "Switch",
  },
  {
    nameProps: "cursorHover",
    typeControl: "Switch",
  },
];

export const ControlsPlayground = () => {
  const [selectProps, setSelectProps] = useState<{ [key: string]: string }>({
    appearance: "information",
    spacing: "wide",
    variant: "filled",
    shape: "circle",
  });

  const [textfieldProps, setTextfieldProps] = useState<{
    [key: string]: string;
  }>({ size: "" });

  const [switchChecked, setSwitchChecked] = useState<{
    [key: string]: boolean;
  }>({
    fullwidth: false,
    cursorHover: false,
  });

  const handleOnchangeSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setSelectProps({ ...selectProps, [name]: event.target.innerText });
  };

  const handleOnchangeTextfield = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextfieldProps({ ...textfieldProps, [e.target.name]: e.target.value });
  };

  const handleOnchangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchChecked({ ...switchChecked, [e.target.name]: e.target.checked });
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
                  options={option.option}
                  onChange={handleOnchangeSelect}
                  value={selectProps[option.nameProps]}
                />
              )}
              {option.typeControl === "Textfield" && (
                <Textfield
                  id={option.nameProps}
                  name={option.nameProps}
                  fullwidth
                  onChange={handleOnchangeTextfield}
                  value={textfieldProps[option.nameProps]}
                />
              )}
              {option.typeControl === "Switch" && (
                <Switch
                  id={option.nameProps}
                  name={option.nameProps}
                  size="large"
                  checked={switchChecked[option.nameProps]}
                  onChange={handleOnchangeSwitch}
                />
              )}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
