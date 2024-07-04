import { UserController } from "./Controller/User.Controller";

const user = {
  description:
    "Component that allows the user to identify himself and locate himself next to the business unit",
  example: UserController,
  name: "User",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/ddv6gc?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="User"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    username: "Leonardo Garzón",
    client: "Sistemas Enlínea S.A",
    size: "large",
  },
  propTypes: {
    username: {
      description:
        "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
      type: "input",
    },
    client: {
      description:
        "indicates the name of the customer or company associated with the user.",
      type: "input",
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
