import { useState } from "react";
import { PlaygroundLabel } from "@design-system/inputs/Label/Playground";
import { Stack, Tabs } from "@inube/design-system";
import { PageCodeLabel } from "@design-system/inputs/Label/code";

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

export const PageLabel = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundLabel />}
      {activeTab === "Code" && <PageCodeLabel />}
    </>
  );
};
