import { useState } from "react";

import { Stack, Tabs } from "@inube/design-system";
import { PageCodeTextfield } from "@design-system/inputs/Textfield/code";
import { PlaygroundTextfield } from "@design-system/inputs/Textfield/Playground";

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

export const PageTextfield = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Stack margin="s200 s400">
        <Tabs onChange={handleTabChange} tabs={tabs} selectedTab={activeTab} />
      </Stack>
      {activeTab === "Playground" && <PlaygroundTextfield />}
      {activeTab === "Code" && <PageCodeTextfield />}
    </>
  );
};
