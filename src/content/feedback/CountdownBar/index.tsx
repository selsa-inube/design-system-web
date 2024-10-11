import { CountdownBarTokens } from "@inubekit/countdownbar";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";
import { CountdownBarController } from "./Controller/CountdownBar.Controller";
import { Text } from "@inubekit/text";

const countdownBarTokensConfig = {
  businessUnit: "inube",
  component: "countdownBar",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "appearance", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const countdownBar = {
  description:
    "The CountdownBar component visually represents a countdown or timer, using a progress bar that animates from full to empty over a specified duration.",
  example: CountdownBarController,
  name: "CountdownBar",
  frame: (
    <iframe
      src="https://codesandbox.io/embed/p6gcv2?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="CountdownBar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  props: {
    height: "4px",
    appearance: "primary",
    duration: 3000,
    paused: true,
    onCountdown: () => {
      console.log("countdown");
    },
  },
  propTypes: {
    height: {
      description:
        "Specifies the height (thickness) of the countdown bar. This allows customization of the bar's thickness to fit the design needs. For example, a taller bar may be more noticeable in some designs, while a thinner bar might fit a more subtle visual style.",
      type: "string",
      table: {
        defaultValue: { summary: "4px" },
      },
    },

    appearance: {
      description: (
        <>
          <Text
            appearance="gray"
            size="medium"
            children="Determines the color theme of the countdown bar, allowing you to indicate different states like primary, success, warning, and more. Available options include:"
          />
          <ul>
            <li>
              <strong>Primary</strong>: Standard color scheme for general
              actions.
            </li>
            <li>
              <strong>Success</strong>: Indicates successful or positive
              actions.
            </li>
            <li>
              <strong>Warning</strong>: Represents caution or attention needed.
            </li>
            <li>
              <strong>Danger</strong>: Highlights critical or destructive
              actions.
            </li>
            <li>
              <strong>Help</strong>: Provides guidance or informational
              feedback.
            </li>
            <li>
              <strong>Dark</strong>: A neutral, darker color for subdued
              elements.
            </li>
            <li>
              <strong>Gray</strong>: Used for secondary or inactive elements.
            </li>
            <li>
              <strong>Light</strong>: Light, less prominent color for subtle
              elements.
            </li>
          </ul>
        </>
      ),
      type: "ICountdownBarAppearance",
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

    duration: {
      description:
        "Specifies the total duration of the countdown in milliseconds. This controls how long the bar takes to complete the countdown from full to empty. Adjusting this value lets you customize the countdown's speed to match the needs of your application.",
      type: "number",
      table: {
        defaultValue: { summary: 3000 },
      },
    },

    paused: {
      description:
        "Indicates whether the countdown animation is paused. When `true`, the animation will stop, and when `false`, the countdown resumes or starts from the beginning. This can be used to temporarily halt the countdown during certain events or user interactions.",
      type: "boolean",
      options: [
        { id: "true", label: "True" },
        { id: "false", label: "False" },
      ],
      table: {
        defaultValue: { summary: false },
      },
    },

    onCountdown: {
      description:
        "A callback function triggered when the countdown reaches zero. This is useful for executing an action or providing feedback to the user when the countdown is complete, such as progressing to the next step in a workflow.",
      type: "(e: AnimationEvent<HTMLDivElement>) => void",
      options: [
        { id: "callback", label: "(e: AnimationEvent<HTMLDivElement>)=>{ }" },
      ],
    },
  },
  tokens: buildTokenDescriptions(CountdownBarTokens, countdownBarTokensConfig),
};

export { countdownBar };
