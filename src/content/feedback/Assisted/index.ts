import { Assisted } from "@inube/design-system";

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
  example: Assisted,
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
};

export { assisted };
