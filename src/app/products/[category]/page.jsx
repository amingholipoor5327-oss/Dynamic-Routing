import { ProductData } from "../../data";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  let { category } = await params;
  let Datail = ProductData[category];

  return (
    <div>
      <ul>
        {Datail.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${category}/${product.name}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}