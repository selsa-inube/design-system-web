import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { Text } from "@inubekit/text";
import { Playground } from "./Tabs/Playground";
import { components } from "../../content";

const tabs = [
  {
    id: "Playground",
    label: "Playground",
    isDisabled: false,
  },
  {
    id: "PropsAndtypes",
    label: "Props and types",
    isDisabled: false,
  },
  {
    id: "Theming",
    label: "Theming",
    isDisabled: false,
  },
  {
    id: "IssuesAndSuggestions",
    label: "Issues and suggestions",
    isDisabled: false,
  },
];

function Component() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => setActiveTab(id);

  const location = useLocation();
  const component = location.pathname.split("/").pop();

  return (
    <>
      <Stack direction="column" gap="32px">
        <Stack direction="column" gap="8px">
          <Text type="display" size="medium">
            {components[component!].name}
          </Text>
          <Text type="title" size="large" appearance="gray">
            {components[component!].description}
          </Text>
        </Stack>

        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && components[component!] && (
        <Playground component={components[component!]} />
      )}
      {/* {activeTab === "Code" && <CodeIcon />} */}
    </>
  );
}

export { Component };
