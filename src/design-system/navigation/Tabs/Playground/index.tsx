import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Tabs } from "@inube/design-system";

import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";

import { IselectProps, ItextfieldProps } from "./type";
import { options, tabs } from "./data";
import { StyledContainerTabs } from "./styles";

export const PlaygroundTabs = () => {
  const [dataChildren, setDataChildren] = useState<
    IvaluesProps<IselectProps, ItextfieldProps>
  >({
    selectProps: {
      type: "tabs",
    },
    textfieldProps: { selectedTab: "generalInformation" },
  });

  const [currentTab, setCurrentTab] = useState(
    dataChildren?.textfieldProps?.selectedTab,
  );

  const handleChildData = (
    data: IvaluesProps<IselectProps, ItextfieldProps>,
  ) => {
    setDataChildren(data);
  };

  const onChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <Stack direction="column" margin="s400">
      <StyledContainerTabs>
        <Tabs
          type={dataChildren?.selectProps?.type}
          selectedTab={currentTab}
          tabs={tabs}
          onChange={onChange}
        />
      </StyledContainerTabs>

      <Stack direction="column">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          customStyle={{ borderRadius: "10px" }}
          showLineNumbers
        >
          {`import { Taps } from "@inube/design-system";

export const ComponentTabs = () => <Tabs ${
            dataChildren?.textfieldProps?.selectedTab &&
            `selectedTab="${currentTab}"`
          }  ${
            dataChildren?.selectProps?.type &&
            `type="${dataChildren?.selectProps?.type}"`
          } />;`}
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
