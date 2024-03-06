import { useEffect, useState } from "react";
import { Select, Switch, Textfield } from "@inube/design-system";
import { Text } from "@inubekit/text";
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "./styles";

import { IvaluesProps } from "./types";

interface IOption {
  id: string;
  label: string;
  disabled: boolean;
}

export interface IOptions {
  nameProps: string;
  typeControl: "Select" | "Textfield" | "Switch";
  option?: IOption[];
}

interface IControlsData<S = undefined, T = undefined, W = undefined> {
  options: IOptions[];
  valuesProps: IvaluesProps<S, T, W>;
  sendFatherData: (data: IvaluesProps<S, T, W>) => void;
}

export const ControlsProps = <S = undefined, T = undefined, W = undefined>(
  props: IControlsData<S, T, W>,
) => {
  const { options, valuesProps, sendFatherData } = props;

  const [controlsData, setControlsData] =
    useState<IvaluesProps<S, T, W>>(valuesProps);

  const handleOnChangeSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setControlsData((prevState) => {
      if (prevState.selectProps) {
        return {
          ...prevState,
          selectProps: {
            ...prevState.selectProps,
            [name]: event.target.innerText,
          },
        };
      }
      return prevState;
    });
  };

  const handleOnChangeTextfield = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setControlsData((prevState) => {
      if (prevState.textfieldProps) {
        return {
          ...prevState,
          textfieldProps: {
            ...prevState.textfieldProps,
            [event.target.name]: event.target.value,
          },
        };
      }
      return prevState;
    });
  };

  const handleOnChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControlsData((prevState) => {
      if (prevState.switchChecked) {
        return {
          ...prevState,
          switchChecked: {
            ...prevState.switchChecked,
            [event.target.name]: event.target.checked,
          },
        };
      }
      return prevState;
    });
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
                  value={
                    controlsData?.selectProps?.[option.nameProps as keyof S]
                  }
                />
              )}
              {option.typeControl === "Textfield" && (
                <Textfield
                  id={option.nameProps}
                  name={option.nameProps}
                  fullwidth
                  onChange={handleOnChangeTextfield}
                  value={
                    controlsData?.textfieldProps?.[option.nameProps as keyof T]
                  }
                />
              )}
              {option.typeControl === "Switch" && (
                <Switch
                  id={option.nameProps}
                  name={option.nameProps}
                  size="large"
                  checked={
                    controlsData?.switchChecked?.[option.nameProps as keyof W]
                  }
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
