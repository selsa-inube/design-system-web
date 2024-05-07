import { Fieldset } from "@inubekit/fieldset";

const fieldset = {
  description: "This component uses a filled primary icon for all applications",
  example: Fieldset,
  name: "Fieldset",
  props: {
    legend: "User Information",
    spacing: "wide",
  },
  propTypes: {
    legend: {
      description:
        "A string that represents the title or heading for the fieldset component.",
    },
    children: {
      description:
        "A prop that expects React nodes as its value, used to render the content inside the fieldset.",
    },
    spacing: {
      description: "Controls the spacing of the legend",
      type: "IFieldsetSpacing",
      options: [
        { id: "compact", label: "Compact" },
        { id: "wide", label: "Wide" },
      ],
    },
  },
};

export { fieldset };
