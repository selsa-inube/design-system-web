import { useState } from "react";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { PlaygroundAvatar } from "@design-system/data/Avatar/Playground/index";
import { CodeAvatar } from "@design-system/data/Avatar/code";

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

export const PageAvatar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundAvatar />}
      {activeTab === "Code" && <CodeAvatar />}
    </>
  );
};
