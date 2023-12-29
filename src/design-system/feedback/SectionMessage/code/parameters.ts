import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "title",
    description: "The title text of the section message",
    type: "string",
  },
  {
    nameProps: "description",
    description:
      "The description text of the section message. If the description is too long, it will be truncated to the MAX_DESCRIPTION_LENGTH",
    type: "string",
  },
  {
    nameProps: "appearance",
    description:
      "The appearance style of the section message and related components.",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "icon",
    description: "The icon to be displayed in the section message.",
    type: "JSX.Element",
  },
  {
    nameProps: "duration",
    description:
      "The duration for which the countdown bar runs. If provided, a countdown bar will appear.",
    type: "number: (milliseconds)",
  },
  {
    nameProps: "closeSectionMessage",
    description:
      "Callback function that is called when the section message needs to be closed, either by user action or after the countdown.",
    type: "function: () => void",
  },
];
