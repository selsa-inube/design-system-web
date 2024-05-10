/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@components/data/Table";
import { determineValue, renderInput } from "./util";
import { breakpoints, titles } from "./config";

function DynamicComponentController(props: any) {
  const { component, handlePropChange, dynamicComponentProps } = props;

  const entries = Object.entries(dynamicComponentProps).map(([key, value]) => ({
    id: key,
    name: key,
    default: determineValue(component.props[key]),
    type: component.propTypes[key]?.type || typeof value,
    value: value,
    description:
      component.propTypes[key]?.type || `${typeof component.props[key]}`,
  }));

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

export { DynamicComponentController };
