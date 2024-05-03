/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";

import { StyledComponentProperties, StyledContainerProperties } from "./styles";
import { ComponentProperties } from "@components/data/ComponentProperties";

interface PropInfo {
  description?: string;
  type?: string;
  options?: Array<{ id: any }>;
}

interface IPropEntry {
  key: string;
  value: any;
  propInfo: PropInfo;
}

function PropEntry(props: IPropEntry) {
  const { key, value, propInfo } = props;
  const typeValue =
    propInfo && Array.isArray(propInfo.options)
      ? propInfo.options.map((option) => option.id).join(", ")
      : "-";

  return (
    <ComponentProperties
      key={key}
      name={key}
      description={propInfo?.description || "No description available."}
      type={propInfo?.type || typeof value}
      value={typeValue}
    />
  );
}

function PropsAndTypes({ component }: any) {
  return (
    <Stack direction="column" gap="10px" margin="24px 0 0 0">
      <Text type="headline" size="small">
        Component properties
      </Text>
      <StyledContainerProperties>
        <StyledComponentProperties>
          {Object.entries(component.props).map(([key, value]) => {
            const propInfo = component.propTypes[key];
            return (
              <PropEntry key={key} value={value} propInfo={propInfo || {}} />
            );
          })}
        </StyledComponentProperties>
      </StyledContainerProperties>
    </Stack>
  );
}

export { PropsAndTypes };
