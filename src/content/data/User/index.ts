import { User } from "@inube/design-system";

const user = {
  description:
    "Component that allows the user to identify himself and locate himself next to the business unit",
  example: User,
  name: "User",
  props: {
    userName: "Leonardo Garzón",
    client: "Sistemas Enlínea S.A",
    size: "large",
  },
  typeOptions: {
    size: [
      { id: "large", label: "Large" },
      { id: "small", label: "Small" },
    ],
  },
};

export { user };
