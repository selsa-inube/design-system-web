import React from "react";

interface ContentProps {
  [key: string]: any;
}

function processProps(contentProps: ContentProps) {
  return Object.keys(contentProps).reduce<ContentProps>(
    (processedProps, key) => {
      const value = contentProps[key];
      if (
        typeof value === "function" ||
        (typeof value === "object" && value?.$$typeof)
      ) {
        processedProps[key] = React.createElement(value);
      } else {
        processedProps[key] = value;
      }
      return processedProps;
    },
    {},
  );
}

function formatPropValue(value: any): string {
  if (
    typeof value === "function" ||
    (typeof value === "object" && value?.$$typeof)
  ) {
    const displayName = value.displayName || value.name || "Component";
    return `{<${displayName} />}`;
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  return `{${JSON.stringify(value)}}`;
}

export { processProps, formatPropValue };
