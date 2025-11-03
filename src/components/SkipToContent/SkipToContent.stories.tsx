import SkipToContent from ".";

export default {
  title: "Components/Skip To Content",
  component: SkipToContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of SkipToContent.",
      control: { type: "text" },
    },
    href: {
      description: "The URL of SkipToContent.",
      control: { type: "text" },
    },
    showArrow: {
      description:
        "If true, an arrow (pointing down) is shown. It is hidden from screen readers.",
      control: { type: "boolean" },
    },
  },
};

export const Default = {
  args: {
    href: "#main",
    showArrow: true,
  },
};
