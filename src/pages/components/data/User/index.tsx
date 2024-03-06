import { useState } from "react";
import { Tabs } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { CodeUser } from "@design-system/data/User/code";
import { PlaygroundUser } from "@design-system/data/User/Playground";

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

export const PageUser = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundUser />}
      {activeTab === "Code" && <CodeUser />}
    </>
  );
};
