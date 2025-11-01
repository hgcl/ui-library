import Page from ".";

export default {
  title: "My components/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: " The `<h1>` title of the Page.",
      control: { type: "text" },
    },
    children: {
      description: "The children of the Page component",
      control: { type: "text" },
    },
    isTitleHidden: {
      description:
        "If true, the `<h1>` title will be visually hidden (but still announced by screen readers).",
      control: { type: "boolean" },
    },
  },
};

export const Default = {
  args: {
    title: "This is the Page title.",
    children: "This is the Page children.",
    isTitleHidden: false,
  },
};
