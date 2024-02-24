import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Tabs, Text, Stack } from "@inube/design-system";

import { Playground } from "./Tabs/Playground";

const tabs = [
  {
    id: "Playground",
    label: "Playground",
    isDisabled: false,
  },
  {
    id: "Code",
    label: "Code",
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
        <Text type="headline">{component}</Text>
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && component && (
        <Playground component={component} />
      )}
      {/* {activeTab === "Code" && <CodeIcon />} */}
    </>
  );
}

export { Component };
