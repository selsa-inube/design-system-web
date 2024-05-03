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
  propTypes: {
    userName: {
      description:
        "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
    },
    client: {
      description:
        "indicates the name of the customer or company associated with the user.",
    },
    size: {
      description:
        "determines the size of the user component in the interface. The avatar will always be visible, but the name and client will be visible according to the size of the component.",
      type: "IUserSize",
      options: [
        { id: "large", label: "Large" },
        { id: "small", label: "Small" },
      ],
    },
  },
};

export { user };
