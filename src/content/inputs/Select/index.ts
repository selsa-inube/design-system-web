import { Select } from "@inube/design-system";

const select = {
  description: "This component uses a filled primary icon for all applications",
  example: Select,
  name: "Select",
  props: {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "Placeholder",
    value: "Item 2",
    disabled: false,
    readonly: false,
    options: [
      { id: "1", label: "Item 1", value: "Item 1", disabled: false },
      { id: "2", label: "123", value: "123", disabled: false },
      { id: "3", label: "Item", value: "Item", disabled: false },
    ],
    required: false,
    size: "wide",
    fullwidth: false,
  },
};

export { select };
