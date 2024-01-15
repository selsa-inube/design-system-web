import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeIcon } from "@design-system/data/Icon/code";
import { PlaygroundIcon } from "@design-system/data/Icon/Playground";

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

export const PageIcon = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundIcon />}
      {activeTab === "Code" && <CodeIcon />}
    </>
  );
};
