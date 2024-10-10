/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textfield } from "@inubekit/input";
import { Toggle } from "@inubekit/toggle";
import { IOption, Select } from "@inubekit/select";
import { Text } from "@inubekit/text";
import { StyledSelectContainer, StyledTextfieldContainer } from "./styles";

const renderInput = (
  propName: string,
  type: string,
  value: string | number | boolean | undefined,
  options: IOption[],
  handlePropChange: (propName: string, newValue: string | boolean) => void,
) => {
  if (options && options.length > 0) {
    return (
      <StyledSelectContainer>
        <Select
          value={value as string}
          options={options.map((option) => ({
            id: option.id,
            label: option.label,
            value: option.value,
          }))}
          onChange={(name, newValue) => handlePropChange(name, newValue)}
          size="compact"
          id={`select-${propName}`}
          name={`select-${propName}`}
        />
      </StyledSelectContainer>
    );
  } else if (type === "boolean") {
    return (
      <Toggle
        checked={value as boolean}
        onChange={(e) => handlePropChange(propName, e.target.checked)}
        id={`toggle-${propName}`}
        size="large"
      />
    );
  } else if (type === "function") {
    return <Text size="small">Function: {value! || "Anonymous"}( )</Text>;
  } else {
    return (
      <StyledTextfieldContainer>
        <Textfield
          type={typeof value === "number" ? "number" : "text"}
          value={value as string}
          onChange={(e) => handlePropChange(propName, e.target.value)}
          id={`textfield-${propName}`}
          size="compact"
        />
      </StyledTextfieldContainer>
    );
  }
};

const determineValue = (value: any) => {
  if (typeof value === "object") {
    return (
      <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  } else if (typeof value === "boolean") {
    return value.toString();
  } else if (typeof value === "function") {
    return value.toString();
  } else if (value === undefined || value === null) {
    return "-";
  } else {
    return value;
  }
};

export { determineValue, renderInput };
