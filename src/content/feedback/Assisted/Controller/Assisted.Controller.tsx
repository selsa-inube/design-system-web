import { useState } from "react";
import { Assisted, IAssisted } from "@inubekit/assisted";
import { StyledContainerAssited } from "./styles";
import { Stack } from "@inubekit/stack";

const AssistedController = (props: IAssisted) => {
  const { steps, currentStepId } = props;

  const [currentStep, setCurrentStep] = useState(currentStepId);

  const handlePrev = (id: number) => {
    setCurrentStep(id - 1);
  };

  const handleNext = (id: number) => {
    if (steps.length > id) {
      setCurrentStep(id + 1);
    }
  };

  return (
    <Stack alignItems="center" width="100%">
      <StyledContainerAssited>
        <Assisted
          {...props}
          steps={steps}
          currentStepId={currentStep}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </StyledContainerAssited>
    </Stack>
  );
};

export { AssistedController };
