interface TokenDescription {
  [key: string]: {
    label: string;
    description: string;
  };
}

const tokenDescription: TokenDescription = {
  appearance: {
    label: "Appearance",
    description: "Defines what state the component should take",
  },
  block: {
    label: "Block",
    description: "Defines which characteristic the token should receive",
  },
  businessUnit: {
    label: "Bussines unit",
    description: "Defines which unit the token belongs to",
  },
  component: {
    label: "Component",
    description: "Defines which component to modify",
  },
  element: {
    label: "Element",
    description: "Defines which characteristic the token should receive",
  },
  modifier: {
    label: "Modifier",
    description: "Defines how the component should look",
  },
};

export { tokenDescription };
