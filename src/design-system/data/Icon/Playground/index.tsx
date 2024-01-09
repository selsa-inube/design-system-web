import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdOutlineAccountCircle } from "react-icons/md";

import { Stack, Icon } from "@inube/design-system";
//import React, { useState } from "react";
import { ControlsPlayground } from "@components/data/ControlsPlayground";

const variant = "filled";

/* const codeString = `import { Icon } from "@inube/design-system";

export const ComponentIcon = () => <Icon appearance="${appearance}" icon={<MdOutlineAccountCircle />}  ${
  variant && `variant="${variant}" `
}/>;`; */

/* const appearanceOptions = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
]; */

/* const options = appearanceOptions.map((appearanceOption) => ({
  id: appearanceOption,
  label: appearanceOption,
  disabled: false,
})); */

const appearance = "primary";

export const PlaygroundIcon = () => {
  /*   const [appearance, setAppearance] = useState("primary");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.outerText;
    setAppearance(value);
  }; */

  return (
    <Stack direction="column" margin="s400">
      <Stack>
        <Icon
          appearance={appearance}
          icon={<MdOutlineAccountCircle />}
          size="34px"
          variant={variant}
        />
      </Stack>
      <Stack>
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          customStyle={{ borderRadius: "10px" }}
          showLineNumbers
          wrapLines
        >
          {`import { Icon } from "@inube/design-system";

export const ComponentIcon = () => <Icon appearance="${appearance}" icon={<MdOutlineAccountCircle />}  ${
            variant && `variant="${variant}" `
          }/>;`}
        </SyntaxHighlighter>
      </Stack>
      <ControlsPlayground />
    </Stack>
  );
};
