import { useState } from "react";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
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
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundHeader />}
      {activeTab === "Code" && <CodeHeader />}
    </>
  );
};
