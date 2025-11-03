import ProductCard from ".";

export default {
  title: "Components/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      description: "The product image url.",
    },
    name: {
      description: "The product name.",
    },
    url: {
      description:
        "The product url — the link opened when the name is clicked.",
    },
    description: {
      description: "The product description.",
    },
    price: {
      description: "The product price.",
    },
    imagePriority: {
      description: "Do we need to load this image in priority?",
    },
    imageBlur: {
      description:
        "The product image (when blurred) url. This fastens page loading and lowers CLS.",
    },
  },
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
