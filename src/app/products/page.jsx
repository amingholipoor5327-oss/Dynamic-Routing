import Link from "next/link";
import { ProductData } from "../data";

export default function Datalist() {
    let Categories = Object.keys(ProductData);

    return (
        <div>
            <ul>
                {
                    Categories.map((category) => (
                        <li key={category}>
                            <Link href={`/products/${category}`}>{category}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}