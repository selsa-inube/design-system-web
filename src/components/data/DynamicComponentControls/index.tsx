/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@components/data/Table";
import { determineValue, renderInput } from "./util";
import { breakpoints, titles } from "./config";

function DynamicComponentControls(props: any) {
  const { component, handlePropChange, dynamicComponentProps } = props;

  const isPropsEmpty = Object.keys(dynamicComponentProps).length === 0;

  const entries = Object.entries(component.propTypes).map(
    ([key, propType]: any) => {
      const type =
        propType.type === "input"
          ? "string"
          : propType.type || typeof component.props[key];
      return {
        id: key,
        name: key,
        default: propType.default || determineValue(component.props[key]),
        type: propType.type || typeof component.props[key],
        value: !isPropsEmpty ? dynamicComponentProps[key] : "-",
        description: type,
      };
    },
  );

  const actions = [
    {
      id: "control",
      actionName: "Control",
      content: (entry: any) =>
        renderInput(
          entry.name,
          entry.type,
          entry.value,
          component,
          handlePropChange,
        ),
    },
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

export { DynamicComponentControls };
