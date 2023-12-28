import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { DescriptionTemplete } from "@design-system/data/Avatar/examples";
import { CodeAvatar } from "@design-system/data/Avatar/code";

const tabs = [
  {
    id: "Example",
    label: "Example",
    isDisabled: false,
  },
  {
    id: "Code",
    label: "Code",
    isDisabled: false,
  },
];

export const PageAvatar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Example" && <DescriptionTemplete />}
      {activeTab === "Code" && <CodeAvatar />}
    </>
  );
};
