import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of the Button.",
      control: { type: "text" },
    },
    href: {
      description:
        "The URL of the Button — in reality a link (`<a>`) element. If there is no `href`, the Button is truly a `<button>` element.",
      control: { type: "text" },
    },
    type: {
      description:
        '3 button variants — there should be max. one "primary" button on a page.',
    },
  },
};

export const Primary = {
  args: {
    type: "primary",
    children: "Click me",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    children: "Click me",
  },
};

export const Ternary = {
  args: {
    type: "ternary",
    children: "Click me",
  },
};
