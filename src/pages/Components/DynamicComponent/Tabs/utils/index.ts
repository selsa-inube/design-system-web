/* eslint-disable @typescript-eslint/no-explicit-any */
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

export { processProps };
