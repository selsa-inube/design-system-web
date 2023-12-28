import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "steps",
    description:
      "(Array of objects): An array to represent each step of the journey. Each object in the array represents one step and must have the following structure: id, label, description (Optional). The order of the steps depends on the order in the array",
    type: "IStep[]: [{id: number, label: string, description?: string}]",
  },
  {
    nameProps: "currentStepId",
    description:
      "An identifier that matches one of the id values within the steps array to indicate the current step",
    type: "string | number",
  },
  {
    nameProps: "titleButtonText",
    description:
      "(Object): An identifier that matches one of the id values within the steps array to indicate the current step",
    type: "{before?: string, after?: string, finish?: string;}",
  },
  {
    nameProps: "handlePrev",
    description:
      "Function that will be called when the user clicks on the previous button. If not provided, the button will not be rendered",
    type: "function: (id: number) => void",
  },
  {
    nameProps: "handleNext",
    description:
      "function that will be called when the user clicks on the next button. If not provided, the button will not be rendered.",
    type: "function: (id: number) => void",
  },
];
