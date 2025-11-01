import Hypertext from ".";

export default {
  title: "My components/Hypertext",
  component: Hypertext,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of Hypertext.",
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
