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
  description:
    "The Assisted component is designed to guide users through a multi-step process, providing clear instructions and feedback at each step. It enhances user experience by visually representing progress and offering navigation controls.",
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
      title="Assisted"
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
        "An array representing each step in the journey. Each step object includes: \n- `id`: A unique identifier for the step.\n- `label`: The title or name of the step.\n- `description`: (Optional) A brief description providing additional context or instructions for the step.",
      type: "IAssistedStep[]",
    },
    currentStepId: {
      description:
        "The unique identifier (`id`) corresponding to the current step in the `steps` array. This value determines which step is currently active and displayed to the user.",
      type: "IAssistedStep['id']",
    },
    handlePrev: {
      description:
        "A function triggered when the user clicks the 'Previous' button. It typically navigates the user to the previous step. If this function is not provided, the 'Previous' button will not be rendered.",
      type: "(id: IAssistedStep['id']) => void",
    },
    handleNext: {
      description:
        "A function triggered when the user clicks the 'Next' button. It advances the user to the next step in the process.",
      type: "(id: IAssistedStep['id']) => void",
    },
    titleButtonText: {
      before: {
        description:
          "Text displayed on the button that navigates to the previous step.",
        type: "string",
      },
      after: {
        description:
          "Text displayed on the button that navigates to the next step.",
        type: "string",
      },
      finish: {
        description:
          "Text displayed on the button during the final step, typically indicating submission or completion.",
        type: "string",
      },
    },
    size: {
      description:
        "Determines the size of the Assisted component, affecting its layout and visibility of elements. In 'large' size, both the step number and description are prominently displayed. In 'small' size, the component is more compact with limited text visibility.",
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
