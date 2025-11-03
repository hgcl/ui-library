import FilterTag from ".";

export default {
  title: "Components/Filter Tag",
  component: FilterTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of the Filter Tag (`<svg>`).",
    },
    label: {
      description: "The `label` of the Filter Tag.",
      control: { type: "text" },
    },
    id: {
      description: "The `id` of the Filter Tag.",
      control: { type: "text" },
    },
    isChecked: {
      description: "If true, the Filter Tag is displayed as selected.",
      control: { type: "boolean" },
    },
    groupName: {
      description:
        "Define a same group name for filter tags belonging to the same group.",
      control: { type: "text" },
    },
  },
};

export const Selected = {
  args: {
    label: "Filter name",
    id: "xxx",
    value: "xxx",
    isChecked: true,
  },
};

export const Unselected = {
  args: {
    label: "Filter name",
    id: "xxx",
    value: "xxx",
    isChecked: false,
  },
};
