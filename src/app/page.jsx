import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
 <h1>Hi welcome to this page nice to meet you 🙌</h1>
         <Link href={"/product"}>go to product </Link>
         <br></br>
         <Link href={"/products"}>go to products </Link>
          <br></br>
          <Link href={"/productSlugs"}>go to productSlugs </Link>
       </main>
    </div>
  );
}
