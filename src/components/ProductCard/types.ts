export type ProductCardProps = {
  image: string;
  name: string;
  url: string;
  description: string;
  price: number;
  imagePriority?: "high" | "low" | "auto";
  imageBlur?: string;
};
