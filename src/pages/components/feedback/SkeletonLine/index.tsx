import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeSkeletonLine } from "@design-system/feedback/SkeletonLine/code";
import { PlaygroundSkeletonLine } from "@design-system/feedback/SkeletonLine/Playground";

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

export const PageSkeletonLine = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundSkeletonLine />}
      {activeTab === "Code" && <CodeSkeletonLine />}
    </>
  );
};
