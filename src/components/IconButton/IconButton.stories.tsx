import IconButton from ".";

export default {
  title: "Components/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label of the Icon Button.",
      control: { type: "text" },
    },
    hideLabel: {
      description:
        "If true, the label will be visually hidden (but still announced by screen readers).",
      control: { type: "boolean" },
    },
    href: {
      description:
        "The URL of the Icon Button — in reality a link (`<a>`) element. If there is no `href`, the Icon Button is truly a `<button>` element.",
      control: { type: "text" },
    },
    children: {
      description:
        "The children of Icon Button. By default: inline `<svg>` or SVG React component.",
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    hideLabel: false,
  },
};

export const NoLabel = {
  args: {
    label: "Label",
    hideLabel: true,
  },
};
