import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeHeader } from "@design-system/navigation/Header/code";
import { PlaygroundHeader } from "@design-system/navigation/Header/Playground";

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

export const PageHeader = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundHeader />}
      {activeTab === "Code" && <CodeHeader />}
    </>
  );
};
