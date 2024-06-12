import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inube/design-system";
import { Text } from "@inubekit/text";
import { Playground } from "./Tabs/Playground";
import { components } from "../../../content";
import { IssuesAndSuggestions } from "./Tabs/IssuesAndSuggestions";
import { Theming } from "./Tabs/Theming";
import { UnderConstruction } from "@pages/Errors/UnderConstruction";
import { StyledSectionMessageWrapper, StyledTag } from "./styles";
import { Tag } from "@inubekit/tag";
import { Icon } from "@inubekit/icon";
import { MdContentCopy } from "react-icons/md";
import {
  ISectionMessageAppearance,
  SectionMessage,
} from "@inubekit/sectionmessage";
import { MdInfo } from "react-icons/md";

const tabs = [
  {
    id: "Playground",
    label: "Playground",
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
  const [sectionMessage, setSectionMessage] = useState<{
    title: string;
    description: string;
    appearance: string;
  } | null>(null);
  const location = useLocation();
  const component = location.pathname.split("/").pop();

  const installCommand = useMemo(() => {
    if (!component) return "";
    const componentName = components[component]?.name?.toLowerCase();
    return `npm install @inubekit/${componentName}`;
  }, [component]);

  useEffect(() => {
    setActiveTab(tabs[0].id);
  }, [component]);

  const handleTagClick = () => {
    navigator.clipboard.writeText(installCommand).then(
      () => {
        setSectionMessage({
          title: "Success",
          description: "Text copied to clipboard successfully!",
          appearance: "success",
        });
      },
      (err) => {
        setSectionMessage({
          title: "Error",
          description: `Could not copy text to clipboard. ${err}`,
          appearance: "error",
        });
      },
    );
  };

  return (
    <>
      {component && (
        <Stack direction="column" gap="48px">
          <Stack direction="column" gap="4px">
            <Text type="title" size="large">
              {components[component].name}
            </Text>
            <Text type="body" size="medium" appearance="gray">
              {components[component].description}
            </Text>
          </Stack>
          {components[component!].example === "" ? (
            <UnderConstruction />
          ) : (
            <>
              <Stack direction="column" gap="32px">
                <Tabs
                  onChange={handleTabChange}
                  tabs={tabs}
                  selectedTab={activeTab}
                />
                {activeTab === "Playground" && (
                  <Stack direction="column" gap="16px">
                    <Text
                      type="headline"
                      size="small"
                      children="Installation"
                    />
                    <StyledTag>
                      <Tag appearance="dark" label={installCommand} />
                      <Icon
                        appearance="primary"
                        icon={<MdContentCopy />}
                        spacing="compact"
                        variant="filled"
                        onClick={handleTagClick}
                      />
                    </StyledTag>
                  </Stack>
                )}
              </Stack>
              {activeTab === "Playground" &&
                component &&
                components[component!] && (
                  <Playground
                    key={`${component}-Playground`}
                    component={components[component!]}
                  />
                )}
              {activeTab === "Theming" && components[component!] && (
                <Theming
                  key={`${component}-Theming`}
                  component={components[component!]}
                />
              )}
              {activeTab === "IssuesAndSuggestions" && <IssuesAndSuggestions />}
            </>
          )}
        </Stack>
      )}{" "}
      {sectionMessage && (
        <StyledSectionMessageWrapper>
          <SectionMessage
            icon={<MdInfo />}
            title={sectionMessage.title}
            description={sectionMessage.description}
            appearance={sectionMessage.appearance as ISectionMessageAppearance}
            duration={5000}
            closeSectionMessage={() => setSectionMessage(null)}
            isMessageResponsive={false}
          />
        </StyledSectionMessageWrapper>
      )}
    </>
  );
}

export { DynamicComponent };
