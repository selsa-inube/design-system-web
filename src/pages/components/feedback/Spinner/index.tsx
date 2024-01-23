import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { CodeSpinner } from "@design-system/feedback/Spinner/code";
import { PlaygroundSpinner } from "@design-system/feedback/Spinner/Playgound";

const tabs = [
  {
    id: "Playgroun",
    label: "Playgroun",
    isDisabled: false,
  },
  {
    id: "Code",
    label: "Code",
    isDisabled: false,
  },
];

export const PageSpinner = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playgroun" && <PlaygroundSpinner />}
      {activeTab === "Code" && <CodeSpinner />}
    </>
  );
};
