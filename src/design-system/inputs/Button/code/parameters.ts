export const parameters = [
  {
    nameProps: "children",
    description: "The text to be displayed",
    type: "React.ReactNode",
  },
  {
    nameProps: "appearance",
    description: "The base styling to apply to the button",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "loading",
    description: "Conditionally show a spinner over the top of a button",
    type: "boolean",
  },
  {
    nameProps: "disabled",
    description: "Set if the button is disabled",
    type: "boolean",
  },
  {
    nameProps: "iconBefore",
    description: "Places an icon within the button, before the button's text",
    type: "React.ReactElement",
  },
  {
    nameProps: "iconAfter",
    description: "Places an icon within the button, after the button's text",
    type: "React.ReactElement",
  },
  {
    nameProps: "type",
    description: "Pass type down to a button",
    type: "string: 'button' | 'submit' | 'reset' | 'link'",
  },
  {
    nameProps: "spacing",
    description: "Pass type down to a button",
    type: "string: 'wide' | 'compact'",
  },
  {
    nameProps: "variant",
    description: "Pass type down to a button",
    type: "string: 'fillled' | 'outlined' | 'none'",
  },
  {
    nameProps: "fullwidth",
    description: "Option to fit button width to its parent width",
    type: "boolean",
  },
  {
    nameProps: "fullwidth",
    description: "Option to fit button width to its parent width",
    type: "boolean",
  },
  {
    nameProps: "fullwidth",
    description: "Function to control button click",
    type: "((e?: Event) => void)",
  },
  {
    nameProps: "path",
    description:
      "Is the path where the button is going to navigate when is used as button for navigation",
    type: "string",
  },
  {
    nameProps: "cursorHover",
    description: "Whether the button changes upon cursor hover",
    type: "boolean",
  },
  {
    nameProps: "parentHover",
    description: "Whether the button changes upon its parent hover",
    type: "boolean",
  },
];
