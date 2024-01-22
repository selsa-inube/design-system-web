import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { PageCodeSelect } from "@design-system/inputs/Select/code";
import { PlaygroundSelect } from "@design-system/inputs/Select/playground";

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

export const PageSelect = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundSelect />}
      {activeTab === "Code" && <PageCodeSelect />}
    </>
  );
};
