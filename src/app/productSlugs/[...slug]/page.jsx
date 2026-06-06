import { ProductData } from "../../data";
import Link from "next/link";

export default async function AllSlug({ params }) {
  const { slug } = await params;
console.log(slug);
console.log(slug.length);
  if (slug.length === 1) {
    const category = slug[0];
    const titleList = ProductData[category];

    return (
      <div>
        <h1>{category}</h1>

        <ul>
          {titleList.map((product) => (
            <li key={product.name}>
              <Link href={`/productSlugs/${category}/${product.name}`}>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
console.log(slug);
console.log(slug.length);
  if (slug.length === 2) {
    const [category, title] = slug;

    const pt = ProductData[category]?.find(
      (p) => p.name === title
    );

    if (!pt) {
      return <h1>محصول پیدا نشد</h1>;
    }

    return (
      <div>
        <h2>{pt.name}</h2>
        <h2>{pt.price}</h2>
      </div>
    );
  }

  return <h1>آدرس نامعتبر است</h1>;
}