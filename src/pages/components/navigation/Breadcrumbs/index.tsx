import { useState } from "react";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { CodeBreadcrumbs } from "@design-system/navigation/Breadcrumbs/code";
import { PlaygroundBreadcrumbs } from "@design-system/navigation/Breadcrumbs/Playground";

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

export const PageBreadcrumbs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="16px 32px">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundBreadcrumbs />}
      {activeTab === "Code" && <CodeBreadcrumbs />}
    </>
  );
};
