import ProductCard from ".";

export default {
  title: "Components/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    image: "https://placehold.co/160x240",
    name: "Product",
    url: "#",
    description:
      "This product is loved by all, and has been our bestseller for numerous years. Use it wherever you like, whenever you like, and share it with the world.",
    price: 10,
  },
};
