import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi welcome to this page nice to meet you 
          <span className={styles.wave}> 🙌</span>
        </h1>
        <div className={styles.buttonGroup}>
          <Link href={"/product"} className={styles.link}>
            🛍️ go to product
          </Link>
          <Link href={"/products"} className={styles.link}>
            📦 go to products
          </Link>
          <Link href={"/productSlugs"} className={styles.link}>
            🔗 go to productSlugs
          </Link>
        </div>
      </main>
    </div>
  );
}