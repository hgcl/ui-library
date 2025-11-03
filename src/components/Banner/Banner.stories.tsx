import Banner from ".";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The message displayed by the Banner.",
      control: { type: "text" },
    },
    isDisabled: {
      description: "If true, the Banner will be disabled and hidden for all.",
      control: { type: "boolean" },
    },
  },
};

export const Default = {
  args: {
    children: "This website is still under construction",
    isDisabled: false,
  },
};
