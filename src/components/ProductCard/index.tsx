import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "./types";
import styles from "./ProductCard.module.css";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  url,
  description,
  price,
  imagePriority = "auto",
  imageBlur = "#",
}) => (
  <li className={styles.ProductCard}>
    <Image
      src={image}
      alt=""
      width={400}
      height={533}
      sizes="(max-width: 480px) 85vw, (max-width: 800px) 50vw, 33vw"
      // Image loading optimizations
      fetchPriority={imagePriority}
      priority={imagePriority === "high" ? true : false}
      placeholder="blur"
      blurDataURL={imageBlur}
    />

    <div className={styles.ProductCard__textWrapper}>
      <div>
        <h2>
          <Link className={styles.ProductCard__link} href={url}>
            {name}
          </Link>
        </h2>
        <p className={styles.ProductCard__description}>{description}</p>
      </div>
      <p className={styles.ProductCard__price}>€ {price.toFixed(2)}</p>
    </div>
  </li>
);
export default ProductCard;
