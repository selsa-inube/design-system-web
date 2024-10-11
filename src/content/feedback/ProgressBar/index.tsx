import { ProgressBarTokens } from "@inubekit/progressbar";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { ProgressBarController } from "./Controller/ProgressBar.Controller";
import { Text } from "@inubekit/text";

const progressBarTokensConfig = {
  businessUnit: "inube",
  component: "progressbar",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const progressBar = {
  description:
    "The ProgressBar component visually indicates the progress of a task or process.",
  example: ProgressBarController,
  name: "ProgressBar",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/72vzhr?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="ProgressBar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    height: "4px",
    appearance: "primary",
    animated: true,
    progress: 70,
    onComplete: () => {
      console.log("progress bar");
    },
  },
  propTypes: {
    animated: {
      description:
        "If `true`, the progress bar will display a shimmer animation, indicating activity when progress is either stuck or slow. This animation gives the user a visual indication that a task is still in progress.",
      type: "boolean",
      options: [
        { id: "true", label: "True" },
        { id: "false", label: "False" },
      ],
      table: {
        defaultValue: { summary: false },
      },
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Determines the color scheme of the progress bar, visually indicating the type or state of the process. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Default color, representing general
              progress.
            </li>
            <li>
              <strong>Success</strong>: Indicates successful or positive
              progress.
            </li>
            <li>
              <strong>Warning</strong>: Represents cautionary progress or
              deadlines.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical or error-prone
              processes.
            </li>
            <li>
              <strong>Help</strong>: Provides information or guidance throughout
              the process.
            </li>
            <li>
              <strong>Dark</strong>: A neutral, darker color for less prominent
              progress indicators.
            </li>
            <li>
              <strong>Gray</strong>: Secondary color for low-importance or
              passive processes.
            </li>
            <li>
              <strong>Light</strong>: Light, subtle color for background tasks
              or less critical progress.
            </li>
          </ul>
        </>
      ),
      type: "IProgressBarAppearance",
      options: [
        { id: "primary", label: "Primary" },
        { id: "success", label: "Success" },
        { id: "warning", label: "Warning" },
        { id: "danger", label: "Danger" },
        { id: "help", label: "Help" },
        { id: "dark", label: "Dark" },
        { id: "gray", label: "Gray" },
        { id: "light", label: "Light" },
      ],
      table: {
        defaultValue: { summary: "primary" },
      },
    },

    height: {
      description:
        "Specifies the height of the progress bar, allowing customization of the bar's thickness to fit the design needs. For example, a taller bar may be more noticeable, while a thinner bar might be used for more subtle visual elements.",
      type: "string",
      table: {
        defaultValue: { summary: "4px" },
      },
    },

    progress: {
      description:
        "Indicates the current progress as a percentage, ranging from 0 to 100. Adjusting this value allows the progress bar to visually reflect the progress of a task or process.",
      type: "number",
      table: {
        defaultValue: { summary: 0 },
      },
    },

    onComplete: {
      description:
        "A callback function that is triggered when the progress bar reaches 100%. This can be used to perform actions such as moving to the next step or notifying the user that the process is complete.",
      type: "(e: AnimationEvent<HTMLDivElement>) => void",
      options: [
        { id: "callback", label: "(e: AnimationEvent<HTMLDivElement>) => { }" },
      ],
    },
  },
  tokens: buildTokenDescriptions(ProgressBarTokens, progressBarTokensConfig),
};

export { progressBar };
