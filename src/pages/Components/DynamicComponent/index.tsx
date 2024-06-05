import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { Text } from "@inubekit/text";
import { Playground } from "./Tabs/Playground";
import { components } from "../../../content";
import { PropsAndTypes } from "./Tabs/PropsAndTypes";
import { IssuesAndSuggestions } from "./Tabs/IssuesAndSuggestions";
import { Theming } from "./Tabs/Theming";
import { UnderConstruction } from "@pages/Errors/UnderConstruction";

const tabs = [
  {
    id: "Playground",
    label: "Playground",
    isDisabled: false,
  },
  {
    id: "PropsAndTypes",
    label: "Props and types",
    isDisabled: false,
  },
  {
    id: "Theming",
    label: "Theming",
    isDisabled: false,
  },
  {
    id: "IssuesAndSuggestions",
    label: "Issues and suggestions",
    isDisabled: false,
  },
];

function DynamicComponent() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (id: string) => setActiveTab(id);

  const location = useLocation();
  const component = location.pathname.split("/").pop();

  return (
    <>
      {component && (
        <Stack direction="column" gap="48px">
          <Stack direction="column" gap="8px">
            <Text type="display" size="medium">
              {components[component].name}
            </Text>
            <Text type="title" size="large" appearance="gray">
              {components[component].description}
            </Text>
          </Stack>
          {components[component!].example === "" ? (
            <UnderConstruction />
          ) : (
            <>
              <Tabs
                onChange={handleTabChange}
                tabs={tabs}
                selectedTab={activeTab}
              />
              {activeTab === "Playground" &&
                component &&
                components[component!] && (
                  <Playground component={components[component!]} />
                )}
              {activeTab === "PropsAndTypes" && components[component!] && (
                <PropsAndTypes component={components[component!]} />
              )}
              {activeTab === "Theming" && components[component!] && (
                <Theming component={components[component!]} />
              )}
              {activeTab === "IssuesAndSuggestions" && <IssuesAndSuggestions />}
            </>
          )}
        </Stack>
      )}
    </>
  );
}

export { DynamicComponent };
