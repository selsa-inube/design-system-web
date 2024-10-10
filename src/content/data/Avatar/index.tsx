import { AvatarController } from "./Controller/Avatar.Controller";

const avatar = {
  description: "An avatar is a visual representation of a user or entity.",
  example: AvatarController,
  name: "Avatar",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/3jmr7y?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
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
  props: {},
  propTypes: {
    onClick: {
      description:
        "Function to handle the click event on the avatar component.",
      type: "function",
      table: {
        defaultValue: { summary: "() => {}" },
      },
    },
  },
  dependencies: {
    icon: {
      component: "<Icon />",
      description:
        "This component uses a filled primary icon for all applications. To change the appearance of 'Avatar', you must modify the token colors of the 'icon' component.",
    },
  },
};

export { avatar };
