import { InformationsProps } from "@components/data/InformationProps";

export const parameters: InformationsProps[] = [
  {
    nameProps: "children",
    description:
      "This prop allows the component to get and print text in the screen",
    type: "string",
  },
  {
    nameProps: "as",
    description:
      "This prop allows us to control the tag that we will inject in the DOM",
    type: "string: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'legend' | 'figcaption' | 'blockqute'",
  },
  {
    nameProps: "appearance",
    description: "the base styling to apply to the icon",
    type: "string: 'primary' | 'error' | 'warning' | 'success' | 'help' | 'dark' | 'infomation' | 'light' | 'dark' | 'gray' | 'link'",
  },
  {
    nameProps: "textAlign",
    description: "This prop controls the text-align style property",
    type: "string: 'start' | 'center' | 'end' | 'justify'",
  },
  {
    nameProps: "margin",
    description:
      "Sets the margin in px or global values for all four sides of the component",
    type: "string",
  },
  {
    nameProps: "padding",
    description:
      "Sets the padding in px p global values for all four sides of the component",
    type: "string",
  },
  {
    nameProps: "type",
    description:
      "This prop is used to select one of the typography roles defined in the Foundations",
    type: "string: 'display' | 'headline' | 'title' | 'body' | 'label'",
  },
  {
    nameProps: "size",
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
    type: "string: '' | 'small' | 'medium' | 'large'",
  },
  {
    nameProps: "disabled",
    description:
      "Add the “disabled” prop, which will control if the text should display a disabled state. For this you can make use of the disabled modifiers you find in the color.text tokens",
    type: "boolean",
  },
  {
    nameProps: "ellipsis",
    description:
      "Add the ellipsis prop to control that the text cannot overflow or resize the parent.Instead, the text will be shown as much as possible in the available space and the rest of it will be replaced with an ellipsis.To make this work you must use the overflow, white - space and text - overflow CSS properties.",
    type: "boolean",
  },
  {
    nameProps: "parentHover",
    description:
      "Prop to force the text to always appear in its hover state. This works when the parent is being hover (not the text), but the parent must display as if all the component is",
    type: "boolean",
  },
  {
    nameProps: "cursorHover",
    description:
      "Prop to allow the text to use the hover modifier you find in color.text tokens and activate the cursor: pointer CSS property",
    type: "boolean",
  },
];
