import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { PageCodeButton } from "@design-system/inputs/Button/code";
import { PlaygroundButton } from "@design-system/inputs/Button/Playground";

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

export const PageButton = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundButton />}
      {activeTab === "Code" && <PageCodeButton />}
    </>
  );
};
