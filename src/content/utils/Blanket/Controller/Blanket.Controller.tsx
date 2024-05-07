import { useState } from "react";
import { Blanket } from "@inubekit/blanket";
import {
  StyledBackdropBlanket,
  StyledButton,
} from "./Blanket.Controller.Styles";

const BlanketController = () => {
  const [showBlanket, setShowBlanket] = useState(false);

  const handleShowBlanket = () => {
    setShowBlanket(true);
  };

  return (
    <>
      <StyledButton onClick={handleShowBlanket}>Show Blanket</StyledButton>
      {showBlanket && (
        <Blanket>
          <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
        </Blanket>
      )}
    </>
  );
};

export { BlanketController };
