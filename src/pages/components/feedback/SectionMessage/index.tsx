import { useState } from "react";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { CodeSectionMessage } from "@design-system/feedback/SectionMessage/code";

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

export const PageSectionMessage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {/*activeTab === "Example" && < /> */}
      {activeTab === "Code" && <CodeSectionMessage />}
    </>
  );
};
