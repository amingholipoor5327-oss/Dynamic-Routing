import { ProductData } from "../../../data";
import Link from "next/link";

export default async function Title({ params }) {
  let { category, title } = await params;

  let productTitle = ProductData[category]?.find(
    (p) => p.name === title   
  );

   if (!productTitle) {
    return (
      <div>
        <h3>محصول مورد نظر پیدا نشد!</h3>
        <Link href={`/products/${category}`}>بازگشت به لیست محصولات</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{productTitle.name}</h2>   
      <h2>{productTitle.price}$</h2>  
      <br />
      <Link href={`/products/${category}`}>← بازگشت به لیست محصولات</Link>
    </div>
  );
}