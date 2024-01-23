import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeCountdownBar } from "@design-system/feedback/CountdownBar/code";
import { PlaygroundCountdownBar } from "@design-system/feedback/CountdownBar/Playground";

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

export const PageCountdownBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundCountdownBar />}
      {activeTab === "Code" && <CodeCountdownBar />}
    </>
  );
};
