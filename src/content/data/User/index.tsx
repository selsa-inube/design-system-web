import { UserController } from "./Controller/User.Controller";

const user = {
  description:
    "The User component allows for the identification of a user and their association with a business unit. This component is essential for applications where user identity and client information need to be prominently displayed.",
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
        "Specifies the name of the user to be displayed within the component. This allows customization of the visual identification of the user within the application interface.",
      type: "string",
    },
    client: {
      description:
        "Indicates the name of the customer or company associated with the user. This information is displayed alongside the user's name.",
      type: "string",
    },
    size: {
      description:
        "Determines the size of the User component. The avatar will always be visible, but the name and client will be shown based on the size specified.",
      type: "IUserSize",
      options: [
        { id: "large", label: "Large" },
        { id: "small", label: "Small" },
      ],
    },
  },
  dependencies: {
    icon: {
      component: "<Avatar />",
      description:
        "This component utilizes the Avatar component from the inube kit. To change the appearance of the User component, modify the token colors of the Avatar component.",
    },
  },
};

export { user };
