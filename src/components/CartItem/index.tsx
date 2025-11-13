import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { CartItemProps } from "./types";
import styles from "./CartItem.module.css";

const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  url,
  description,
  price,
  children,
}) => (
  <li className={styles.CartItem}>
    <div className={styles.CartItem__imageWrapper}>
      <Image src={image} alt="" width={150} height={150} />
    </div>
    <div className={styles.CartItem__textWrapper}>
      <div className={styles.CartItem__nameAndDescription}>
        <h2>
          <Link className={styles.CartItem__link} href={url}>
            {name}
          </Link>
        </h2>
        <p className={styles.CartItem__description}>{description}...</p>
        {children ? (
          children
        ) : (
          <Button variant="ternary">Remove from cart</Button>
        )}
      </div>
      <p className={styles.CartItem__price}>€ {price.toFixed(2)}</p>
    </div>
  </li>
);
export default CartItem;
