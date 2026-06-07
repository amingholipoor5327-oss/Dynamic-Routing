import Link from "next/link";
import { ProductData } from "../data";
import styles from "./products.module.css"; // ایمپورت CSS Module

export default function Datalist() {
  let Categories = Object.keys(ProductData);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>دسته‌بندی محصولات</h1>
      <ul className={styles.categoryList}>
        {Categories.map((category) => (
          <li key={category} className={styles.categoryItem}>
            <Link href={`/products/${category}`} className={styles.categoryLink}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}