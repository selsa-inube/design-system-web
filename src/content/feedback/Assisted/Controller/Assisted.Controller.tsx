import { useState } from "react";
import { Assisted, IAssistedStep } from "@inubekit/assisted";
import { StyledContainerAssited } from "./styles";
import { Stack } from "@inubekit/stack";

interface AssistedControllerProps {
  steps: IAssistedStep[];
  currentStepId: number;
}

const AssistedController = (props: AssistedControllerProps) => {
  const { steps, currentStepId } = props;

  const [currentStep, setCurrentStep] = useState(currentStepId);

  const handlePrev = (step: IAssistedStep) => {
    if (step.number > 1) {
      setCurrentStep(step.number - 1);
    }
  };

  const handleNext = (step: IAssistedStep) => {
    if (step.number < steps.length) {
      setCurrentStep(step.number + 1);
    }
  };

  const handleSubmit = (step: IAssistedStep) => {
    console.log("Form submitted at step:", step.number);
  };

  return (
    <Stack alignItems="center" width="100%">
      <StyledContainerAssited>
        <Assisted
          step={steps[currentStep - 1]}
          totalSteps={steps.length}
          onBackClick={handlePrev}
          onNextClick={handleNext}
          onSubmitClick={handleSubmit}
          disableNext={false}
          disableBack={currentStep === 1}
          disableSubmit={currentStep !== steps.length}
        />
      </StyledContainerAssited>
    </Stack>
  );
};

export { AssistedController };
