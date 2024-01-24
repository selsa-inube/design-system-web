import { useState } from "react";
import { Stack, Tabs } from "@inube/design-system";

import { CodeTable } from "@design-system/data/Table/code";
import { PlaygroundTable } from "@design-system/data/Table/Playground";

const tabs = [
  {
    id: "Playgroun",
    label: "Playgroun",
    isDisabled: false,
  },
  {
    id: "Code",
    label: "Code",
    isDisabled: false,
  },
];

export const PageTable = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playgroun" && <PlaygroundTable />}
      {activeTab === "Code" && <CodeTable />}
    </>
  );
};
