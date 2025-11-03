import React from "react";
import { ProductGridProps } from "./types";
import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  imageProp,
  nameProp,
  urlProp,
  descriptionProp,
  priceProp,
  imageBlurProp,
  ...props
}) => (
  <ul className={styles.Grid} {...props}>
    {/* First product */}
    {products.slice(0, 1).map((el) => (
      <ProductCard
        image={el[imageProp]}
        name={el[nameProp]}
        url={el[urlProp]}
        description={el[descriptionProp]}
        price={el[priceProp]}
        imagePriority="high"
        imageBlur={el[imageBlurProp]}
      />
    ))}
    {/* From 2nd product to last */}
    {products.slice(1).map((el) => (
      <ProductCard
        image={el[imageProp]}
        name={el[nameProp]}
        url={el[urlProp]}
        description={el[descriptionProp]}
        price={el[priceProp]}
        imagePriority="low"
        imageBlur={el[imageBlurProp]}
      />
    ))}
  </ul>
);

export default ProductGrid;
