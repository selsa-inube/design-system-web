/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@components/data/Table";
import { Textfield } from "@inubekit/textfield";
import { Toggle } from "@inubekit/toggle";
import { Select } from "@inube/design-system";
import { Text } from "@inubekit/text";
function DynamicComponentController(props: any) {
  const { component, handlePropChange, dynamicComponentProps } = props;

  const renderInput = (propName: string | number, value: any) => {
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
      return (
        <Text size="small">Function: {`${value.name}( )` || "Anonymous"}</Text>
      );
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

  const actions = [
    {
      id: "control",
      actionName: "Control",
      content: (entry: any) => renderInput(entry.name, entry.value),
    },
  ];

  const entries = Object.entries(dynamicComponentProps).map(([key, value]) => ({
    id: key,
    name: key,
    default: component.props[key] || String(component.props[key]) || "-",
    value: value,
    description: `${typeof value}`,
  }));

  const titles = [
    { id: "name", titleName: "Name", priority: 1 },
    { id: "description", titleName: "Description", priority: 2 },
    { id: "default", titleName: "Default", priority: 3 },
    { id: "", titleName: "", priority: 0, hidden: true },
  ];

  const breakpoints = [
    { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
    { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
    { breakpoint: "(max-width: 980px)", totalColumns: 2 },
    { breakpoint: "(max-width: 850px)", totalColumns: 4 },
    { breakpoint: "(max-width: 680px)", totalColumns: 3 },
    { breakpoint: "(max-width: 550px)", totalColumns: 2 },
    { breakpoint: "(max-width: 360px)", totalColumns: 1 },
  ];

  return (
    <Table
      titles={titles}
      entries={entries}
      actions={actions}
      breakpoints={breakpoints}
      pageLength={15}
    />
  );
}

export { DynamicComponentController };
