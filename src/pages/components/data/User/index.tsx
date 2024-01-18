import { useState } from "react";
import { Stack, Tabs } from "@inube/design-system";
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
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundUser />}
      {activeTab === "Code" && <CodeUser />}
    </>
  );
};
