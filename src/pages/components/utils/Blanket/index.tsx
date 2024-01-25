import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeBlanket } from "@design-system/utils/Blnaket/code";
import { PlaygroundBlanket } from "@design-system/utils/Blnaket/Playground";

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

export const PageBlankent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundBlanket />}
      {activeTab === "Code" && <CodeBlanket />}
    </>
  );
};
