import { useEffect, useState } from "react";
import { Select, Switch, Text, Textfield } from "@inube/design-system";

import {
  IOptions,
  IValuesProps,
  appearanceOptions,
  shape,
  spacingOptions,
  variant,
} from "./types";
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "./styles";

interface IControlsPlayground {
  sendFatherData: (data: IValuesProps) => void;
  initialValuesProps: IValuesProps;
}

const options: IOptions[] = [
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
    nameProps: "cursorHover",
    typeControl: "Switch",
  },
  {
    nameProps: "disabled",
    typeControl: "Switch",
  },
  {
    nameProps: "parentHover",
    typeControl: "Switch",
  },
];

export const ControlsPlayground = (props: IControlsPlayground) => {
  const { sendFatherData, initialValuesProps: valuesProps } = props;

  const [controlsData, setControlsData] = useState<IValuesProps>({
    selectProps: {
      appearance: valuesProps?.selectProps?.appearance,
      spacing: valuesProps?.selectProps?.spacing,
      variant: valuesProps?.selectProps?.variant,
      shape: valuesProps?.selectProps?.shape,
    },
    textfieldProps: { size: valuesProps?.textfieldProps?.size },
    switchChecked: {
      fullwidth: valuesProps?.switchChecked?.fullwidth,
      cursorHover: valuesProps?.switchChecked?.cursorHover,
      disabled: valuesProps?.switchChecked?.disabled,
      parentHover: valuesProps?.switchChecked?.parentHover,
    },
  });

  const handleOnChangeSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setControlsData((prevState) => ({
      ...prevState,
      selectProps: {
        ...prevState.selectProps,
        [name]: event.target.innerText,
      },
    }));
  };

  const handleOnChangeTextfield = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setControlsData((prevState) => ({
      ...prevState,
      textfieldProps: {
        ...prevState.textfieldProps,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleOnChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControlsData((prevState) => ({
      ...prevState,
      switchChecked: {
        ...prevState.switchChecked,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  useEffect(() => {
    sendFatherData(controlsData);
  }, [controlsData, sendFatherData]);

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
                  onChange={handleOnChangeSelect}
                  value={controlsData.selectProps[option.nameProps]}
                />
              )}
              {option.typeControl === "Textfield" && (
                <Textfield
                  id={option.nameProps}
                  name={option.nameProps}
                  fullwidth
                  onChange={handleOnChangeTextfield}
                  value={controlsData.textfieldProps[option.nameProps]}
                />
              )}
              {option.typeControl === "Switch" && (
                <Switch
                  id={option.nameProps}
                  name={option.nameProps}
                  size="large"
                  checked={controlsData.switchChecked[option.nameProps]}
                  onChange={handleOnChangeSwitch}
                />
              )}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
