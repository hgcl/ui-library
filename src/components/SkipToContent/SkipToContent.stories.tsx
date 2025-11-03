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
      description: "The children of Skip To Content (text displayed).",
      control: { type: "text" },
    },
    href: {
      description:
        "The URL of Skip To Content — usually the `id` of the `main` tag, right after the navigation links.",
      control: { type: "text" },
    },
    showArrow: {
      description:
        "If true, an arrow (pointing down) is shown. This symbol is hidden from screen readers.",
      control: { type: "boolean" },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", position: "relative", top: "-30px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    href: "#main",
    showArrow: true,
  },
};
