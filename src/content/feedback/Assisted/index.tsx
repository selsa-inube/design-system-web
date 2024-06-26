import { AssistedController } from "./Controller/Assisted.Controller";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

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

const assistedTokensConfig = {
  businessUnit: "inube",
  component: "assisted",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
    { id: "reference", order: 6 },
  ],
};

const assisted = {
  description: "This component uses a filled primary icon for all applications",
  example: AssistedController,
  name: "Assisted",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/lqknjf?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Avatar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
      default: "large",
    },
  },
  tokens: buildTokenDescriptions(inube.assisted, assistedTokensConfig),
};

export { assisted };
