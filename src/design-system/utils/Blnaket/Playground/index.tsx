import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Stack } from "@inubekit/stack";
import { Blanket, Button } from "@inube/design-system";
import { StyledBackdropBlanket } from "./styles";

/* import { ControlsProps } from "@components/feedback/ControlsPlayground";
import { IvaluesProps } from "@components/feedback/ControlsPlayground/types";
import { options } from "./data"; */

export const PlaygroundBlanket = () => {
  const [showBlanket, setShowBlanket] = useState(false);

  const handleShowBlanket = () => {
    setShowBlanket(true);
  };

  return (
    <Stack direction="column" margin="32px">
      <Stack direction="column">
        <Button onClick={handleShowBlanket}>Show Blanket</Button>
        {showBlanket && (
          <Blanket>
            <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
          </Blanket>
        )}
      </Stack>

      <Stack direction="column">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          customStyle={{ borderRadius: "10px" }}
          showLineNumbers
        >
          {`import { Blanket } from "@inube/design-system";

export const ComponentBlanket = () =>(  
                                    <>
                                      <Button onClick={handleShowBlanket}>Show Blanket</Button>
                                      {showBlanket && (
                                        <Blanket>
                                          <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
                                        </Blanket>
                                      )}
                                    </>
                                    );`}
        </SyntaxHighlighter>
      </Stack>
    </Stack>
  );
};
