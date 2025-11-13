import React from "react";
import { ProductGridProps } from "./types";
import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid: React.FC<ProductGridProps> = ({ products, ...props }) => (
  <ul className={styles.ProductGrid} {...props}>
    {/* First product */}
    {products
      .slice(0, 1)
      .map(({ id, image, name, url, description, price, imageBlur }) => (
        <ProductCard
          key={id}
          image={image}
          name={name}
          url={url}
          description={description}
          price={price}
          imagePriority="high"
          imageBlur={imageBlur}
        />
      ))}
    {/* From 2nd product to last */}
    {products
      .slice(1)
      .map(({ id, image, name, url, description, price, imageBlur }) => (
        <ProductCard
          key={id}
          image={image}
          name={name}
          url={url}
          description={description}
          price={price}
          imagePriority="low"
          imageBlur={imageBlur}
        />
      ))}
  </ul>
);

export default ProductGrid;
