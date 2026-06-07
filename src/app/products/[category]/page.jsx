import { ProductData } from "../../data";
import Link from "next/link";
import styles from "./category.module.css";

export default async function CategoryPage({ params }) {
  let { category } = await params;
  let products = ProductData[category];

  if (!products) {
    return <div className={styles.errorMessage}>دسته‌بندی مورد نظر یافت نشد</div>;
  }

  return (
    <div className={styles.categoryContainer}>
      
      <h1 className={styles.categoryTitle}>{category}</h1>

      <ul className={styles.productList}>
        {products.map(
          (product) => (
          <li key={product.id} className={styles.productItem}>

            <Link href={`/products/${category}/${product.name}`} className={styles.productLink}>

              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>{product.price}</div>
              
            </Link>
            
          </li>
        ))}
       
         </ul>
           <Link href={"/products"} className={styles.backButton}>
          ← بازگشت به لیست محصولات
        </Link>    
    </div>
  );
}