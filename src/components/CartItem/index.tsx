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
  <li className={styles.Card}>
    <div className={styles.Card_image}>
      <Image src={image} alt="" width={150} height={150} />
    </div>
    <div className={styles.Card_textWrapper}>
      <div className={styles.Card_nameAndDescription}>
        <h2>
          <Link className={styles.Card_link} href={url}>
            {name}
          </Link>
        </h2>
        <p className={styles.Card_description}>{description}...</p>
        {children ? (
          children
        ) : (
          <Button variant="ternary">Remove from cart</Button>
        )}
      </div>
      <p className={styles.Card_price}>€ {price.toFixed(2)}</p>
    </div>
  </li>
);
export default CartItem;
