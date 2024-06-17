/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textfield } from "@inubekit/textfield";
import { Toggle } from "@inubekit/toggle";
import { IOptionItem, Select } from "@inubekit/select";
import { Text } from "@inubekit/text";
import { StyledSelectContainer, StyledTextfieldContainer } from "./styles";

const renderInput = (
  propName: string,
  type: string,
  value: string | number | boolean | undefined,
  options: {
    map: (arg0: (option: any) => { label: any; value: any }) => IOptionItem[];
  },
  handlePropChange: (arg0: any, arg1: string | boolean) => void,
) => {
  if (options) {
    return (
      <StyledSelectContainer>
        <Select
          value={value as string}
          options={options.map((option) => ({
            label: option.label,
            value: option.id,
          }))}
          onChange={(e) =>
            handlePropChange(propName, e.target.innerText.toLowerCase())
          }
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
        label={""}
        margin={""}
        padding={""}
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
