/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { StyledAccordionContainer, StyledRotatingIcon } from "./styles";
import { Divider } from "@inubekit/divider";

interface AccordionProps {
  title?: string;
  children?: any;
  collapse?: boolean;
}

function Accordion(props: AccordionProps) {
  const { title, children, collapse = false } = props;
  const [expanded, setExpanded] = useState(collapse);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <StyledAccordionContainer>
      <Stack direction="column" gap="16px">
        <Stack justifyContent="space-between">
          <Text type="label" size="large">
            {title}
          </Text>
          <Icon
            appearance="dark"
            icon={
              <StyledRotatingIcon
                $expanded={expanded}
                size="20px"
                onClick={handleToggle}
              />
            }
          />
        </Stack>
        {expanded && (
          <>
            <Divider dashed />
            {children}
          </>
        )}
      </Stack>
    </StyledAccordionContainer>
  );
}

export { Accordion };
