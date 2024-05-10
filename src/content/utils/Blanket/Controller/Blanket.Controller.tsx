import { useState } from "react";
import { Blanket } from "@inubekit/blanket";
import { Button } from "@inubekit/button";
import {
  StyledBackdropBlanket,
  StyledBlanketContainer,
} from "./Blanket.Controller.Styles";

const BlanketController = () => {
  const [showBlanket, setShowBlanket] = useState(false);

  const handleShowBlanket = () => {
    setShowBlanket(true);
  };

  return (
    <StyledBlanketContainer>
      <Button onClick={handleShowBlanket}>Show Blanket</Button>
      {showBlanket && (
        <Blanket>
          <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
        </Blanket>
      )}
    </StyledBlanketContainer>
  );
};

export { BlanketController };
