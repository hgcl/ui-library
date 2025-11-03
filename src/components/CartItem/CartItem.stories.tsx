import CartItem from ".";

export default {
  title: "Components/Cart Item",
  component: CartItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        'The children of the Cart Item component. By default: a "Remove from cart" button.',
    },
  },
};

export const Default = {
  args: {
    image: "https://placehold.co/160x240",
    name: "Product",
    url: "#",
    description: "This product is loved by all, and has been our bestseller",
    price: 10,
  },
};
