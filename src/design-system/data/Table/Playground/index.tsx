import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Table } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { ItextfieldProps } from "./type";
import { options } from "./data";
import { actionsMuck, breakPointsMuck, entries, titlesMuck } from "./mucks";

export const PlaygroundTable = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<undefined, ItextfieldProps>
  >({
    textfieldProps: {
      id: "table",
      filter: "",
      pageLength: 10,
      modalTitle: "Form",
      infoTitle: "information",
      actionsTitle: "",
    },
  });

  const handleChildData = (data: IvaluesProps<undefined, ItextfieldProps>) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack width="100%" direction="column">
        {
          <Table
            id={dataChildren?.textfieldProps?.id}
            filter={dataChildren?.textfieldProps?.filter}
            pageLength={dataChildren?.textfieldProps?.pageLength}
            modalTitle={dataChildren?.textfieldProps?.modalTitle}
            infoTitle={dataChildren?.textfieldProps?.infoTitle}
            actionsTitle={dataChildren?.textfieldProps?.actionsTitle}
            actions={actionsMuck}
            breakpoints={breakPointsMuck}
            titles={titlesMuck}
            entries={entries}
          />
        }
      </Stack>
      <Stack width="100%" direction="column" margin="24px 0 0 0">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          customStyle={{ borderRadius: "10px" }}
          showLineNumbers
        >
          {`import { Table } from "@inube/design-system";

export const ComponentTable = () => <Table ${
            dataChildren?.textfieldProps?.id &&
            `id="${dataChildren?.textfieldProps?.id}"`
          } ${
            dataChildren?.textfieldProps?.pageLength &&
            `pageLength=${dataChildren?.textfieldProps?.pageLength}`
          } ${
            dataChildren?.textfieldProps?.filter &&
            `filter="${dataChildren?.textfieldProps?.filter}"`
          } ${
            dataChildren?.textfieldProps?.infoTitle &&
            `infoTitle="${dataChildren?.textfieldProps?.infoTitle}"`
          } ${
            dataChildren?.textfieldProps?.modalTitle &&
            `modalTitle="${dataChildren?.textfieldProps?.modalTitle}"`
          } ${
            dataChildren?.textfieldProps?.actionsTitle &&
            `actionsTitle="${dataChildren?.textfieldProps?.actionsTitle}"`
          }/>;`}
        </SyntaxHighlighter>
      </Stack>

      <ControlsProps
        options={options}
        sendFatherData={handleChildData}
        valuesProps={dataChildren}
      />
    </Stack>
  );
};
