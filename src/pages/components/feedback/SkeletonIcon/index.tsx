import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeSkeletonIcon } from "@design-system/feedback/SkeletonIcon/code";
import { PlaygroundSkeletonIcon } from "@design-system/feedback/SkeletonIcon/Playground";

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

export const PageSkeletonIcon = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundSkeletonIcon />}
      {activeTab === "Code" && <CodeSkeletonIcon />}
    </>
  );
};
