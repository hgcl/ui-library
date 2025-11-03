import Hypertext from ".";

export default {
  title: "Components/Hypertext",
  component: Hypertext,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of Hypertext (text displayed).",
      control: { type: "text" },
    },
    href: {
      description: "The URL of Hypertext.",
      control: { type: "text" },
    },
  },
};

export const Default = {
  args: {
    children: "another link",
    href: "#",
  },
};
