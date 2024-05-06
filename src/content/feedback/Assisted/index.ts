import { AssistedController } from "./Controller/Assisted.Controller";

const stepsMock = [
  {
    id: 1,
    label: "Información general",
    description: "Información general",
  },

  {
    id: 2,
    label: "Ramas",
    description: "Ramas",
  },

  {
    id: 3,
    label: "Proyectos",
    description: "Proyectos",
  },

  {
    id: 4,
    label: "Unidades de ayuda",
    description: "Unidades de ayuda",
  },

  {
    id: 5,
    label: "Nómina",
    description: "Nómina",
  },

  {
    id: 6,
    label: "Verificación",
    description: "Verificación",
  },
];

const assisted = {
  description: "This component uses a filled primary icon for all applications",
  example: AssistedController,
  name: "Assisted",
  props: {
    steps: stepsMock,
    currentStepId: 3,
    titleButtonText: {
      before: "Anterior",
      after: "Siguiente",
      finish: "Enviar",
    },
  },
  propTypes: {
    steps: {
      description:
        " An array to represent each step of the journey. Each object in the array represents one step and must have the following structure: id, label, description (Optional). The order of the steps depends on the order in the array,",
      type: "IAssistedStep[ ]",
    },
    currentStepId: {
      description:
        " An identifier that matches one of the id values within the steps array to indicate the current step.",
      type: "IAssistedStep[id]",
    },

    handlePrev: {
      description:
        "A function that will be called when the user clicks on the previous button. If not provided, the button will not be rendered.",
      type: "IAssistedStep[id]",
    },

    handleNex: {
      descriptions:
        "A function that will be called when the user clicks on the next button.",
      type: "IAssistedStep[id]",
    },
    titleButtonBefore: {
      description:
        "A string to be displayed in the button before the label of the current step.",
      type: "IAssistedTitleButton",
    },
    titleButtonAfter: {
      description:
        "A string to be displayed in the button after the label of the current step.",
      type: "IAssistedTitleButton",
    },
    size: {
      description: "assited's size",
      type: "IAssistedSize",
      options: [
        { id: "large", label: "Large" },
        { id: "small", label: "Small" },
      ],
    },
  },
};

export { assisted };
