import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { PageCodeTextarea } from "@design-system/inputs/Textarea/code";
import { PlaygroundTextarea } from "@design-system/inputs/Textarea/Playground";

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

export const PageTextarea = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundTextarea />}
      {activeTab === "Code" && <PageCodeTextarea />}
    </>
  );
};
