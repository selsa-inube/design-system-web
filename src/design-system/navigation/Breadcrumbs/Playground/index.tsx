import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Stack, Breadcrumbs } from "@inube/design-system";

/* import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { options } from "./data"; */

export const PlaygroundBreadcrumbs = () => {
  return (
    <Stack direction="column" gap="20px" margin="s400">
      <Stack>
        <Breadcrumbs
          crumbs={[
            {
              label: "Inicio",
              href: "#",
            },
            {
              label: "Usuarios",
              href: "#",
            },
            {
              label: "Invitacion",
              href: "#",
            },
            {
              label: "Edicion",
              href: "#",
            },
            {
              label: "Ramas",
              href: "#",
            },
            {
              label: "Ciudad",
              href: "#",
            },
          ]}
        />
      </Stack>

      <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
        {`import { Breadcrumbs } from "@inube/design-system";
        
export const ComponentBreadcrumbs = () => <Breadcrumbs />`}
      </SyntaxHighlighter>
    </Stack>
  );
};
