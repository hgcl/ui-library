import ProductGrid from ".";

export default {
  title: "Components/Product Grid",
  component: ProductGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story: React.FC) => (
      <div style={{ width: "800px" }}>
        <Story />
      </div>
    ),
  ],
};

const productExample = {
  id: "a",
  image: "https://placehold.co/160x240",
  name: "Product",
  url: "#",
  description:
    "This product is loved by all, and has been our bestseller for numerous years. Use it wherever you like, whenever you like, and share it with the world.",
  price: 10,
  imageBlur: "https://placehold.co/160x240",
};

export const Default = {
  args: {
    products: [productExample, productExample, productExample],
  },
};
