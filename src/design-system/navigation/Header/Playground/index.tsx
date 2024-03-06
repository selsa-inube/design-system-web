import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Header } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { options } from "./data";
import { ItextfieldProps } from "./type";
import { links, navigation } from "./mouck";

export const PlaygroundHeader = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<undefined, ItextfieldProps>
  >({
    textfieldProps: {
      portalId: "portals",
      userName: "Leonardo Garzón",
      client: "Sistemas Enlínea S.A",
    },
  });

  const handleChildData = (data: IvaluesProps<undefined, ItextfieldProps>) => {
    setDataChildren(data);
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack direction="column">
        <Header
          portalId="portals"
          userName={dataChildren?.textfieldProps?.userName}
          client={dataChildren?.textfieldProps?.client}
          navigation={navigation}
          links={links}
        />
      </Stack>
      <Stack direction="column">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          customStyle={{ borderRadius: "10px" }}
          showLineNumbers
        >
          {`import { Header } from "@inube/design-system";

export const ComponentHeader = () => <Header />;`}
        </SyntaxHighlighter>
      </Stack>

      {
        <ControlsProps
          options={options}
          sendFatherData={handleChildData}
          valuesProps={dataChildren}
        />
      }
    </Stack>
  );
};
