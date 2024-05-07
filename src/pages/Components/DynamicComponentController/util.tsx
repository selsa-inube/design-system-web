/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textfield } from "@inubekit/textfield";
import { Toggle } from "@inubekit/toggle";
import { Select } from "@inube/design-system";
import { Text } from "@inubekit/text";

const renderInput = (
  propName: string | number,
  value: any,
  component: any,
  handlePropChange: any,
) => {
  if (
    component.propTypes &&
    component.propTypes[propName] &&
    component.propTypes[propName].type
  ) {
    const options = component.propTypes[propName].options;
    return (
      <Select
        value={value}
        options={options}
        onChange={(e: { target: { innerText: string } }) =>
          handlePropChange(propName, e.target.innerText.toLowerCase())
        }
        size="compact"
        id={`${component.name}-${propName}-Select`}
      />
    );
  } else if (typeof value === "boolean") {
    return (
      <Toggle
        checked={value}
        onChange={(e: { target: { checked: any } }) =>
          handlePropChange(propName, e.target.checked)
        }
        id={`${component.name}-${propName}-toggle`}
        size="large"
        label=""
        margin="0"
        padding="0"
      />
    );
  } else if (typeof value === "function") {
    return <Text size="small">Function: {value.name || "Anonymous"}( )</Text>;
  } else {
    return (
      <Textfield
        type={typeof value === "number" ? "number" : "text"}
        value={value}
        onChange={(e: { target: { value: any } }) =>
          handlePropChange(propName, e.target.value)
        }
        id={`${component.name}-${propName}-Textfield`}
        size="compact"
      />
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
