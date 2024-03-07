import { useState } from "react";
import { PlaygroundLabel } from "@design-system/inputs/Label/Playground";
import { Tabs } from "@inube/design-system";
import { PageCodeLabel } from "@design-system/inputs/Label/code";
import { Stack } from "@inubekit/stack";

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
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundLabel />}
      {activeTab === "Code" && <PageCodeLabel />}
    </>
  );
};
