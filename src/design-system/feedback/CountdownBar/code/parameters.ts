import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "height",
    description:
      "Which allows it to be given a custom thickness, according to the need",
    type: "string | number",
  },
  {
    nameProps: "appearance",
    description: "Colors used to identify the state of the component",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "duration",
    description: "The total duration of the animation, in milliseconds",
    type: "number",
  },
  {
    nameProps: "duration",
    description: "The total duration of the animation, in milliseconds",
    type: "number",
  },
  {
    nameProps: "paused",
    description: "Pause or start the animation",
    type: "boolean",
  },
  {
    nameProps: "onCountdown",
    description: "Pause or start the animation",
    type: "funjction: (e: AnimationEvent<HTMLDivElement>) => void;",
  },
];
