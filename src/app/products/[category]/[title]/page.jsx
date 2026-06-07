import { ProductData } from "../../../data";
import Link from "next/link";
import styles from "./productDetail.module.css";

export default async function Title({ params }) {
  let { category, title } = await params;

  let productTitle = ProductData[category]?.find(
    (p) => p.name === title   
  );

  if (!productTitle) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorMessage}>
          <h3>❌ محصول مورد نظر پیدا نشد!</h3>
          <Link href={`/products/${category}`} className={styles.errorLink}>
            بازگشت به لیست محصولات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productCard}>
        <h1 className={styles.productName}>{productTitle.name}</h1>
        <div className={styles.productPrice}>{productTitle.price}</div>
        <div className={styles.priceLabel}>قیمت نهایی</div>
        <br />
        <Link href={`/products/${category}`} className={styles.backButton}>
          ← بازگشت به لیست محصولات
        </Link>
      </div>
    </div>
  );
}