import FilterTag from ".";

export default {
  title: "Components/Filter Tag",
  component: FilterTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    //     children,
    // id,
    // value,
    // selectedCategories,
    // isChecked,
    // handleFilterChange,
    children: {
      description: "The children of the Filter Tag.",
      control: { type: "text" },
    },
    id: {
      description: "The `id` of the Filter Tag.",
      control: { type: "text" },
    },
    value: {
      description: "The `value` of the Filter Tag.",
      control: { type: "text" },
    },
    isChecked: {
      description: "If true, the Filter Tag is displayed as selected.",
      control: { type: "boolean" },
    },
  },
};

export const Selected = {
  args: {
    children: "Filter name",
    id: "xxx",
    value: "xxx",
    isChecked: true,
  },
};

export const Unselected = {
  args: {
    children: "Filter name",
    id: "xxx",
    value: "xxx",
    isChecked: false,
  },
};
