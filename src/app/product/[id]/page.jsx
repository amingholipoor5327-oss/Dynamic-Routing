import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProuductDtail({params}){

  let Product = [
    {id:1 , name: "product1" , title: "hi! welcome to the product 1"},
    {id:2 , name: "product2" , title: "hi! welcome to the product 2"},
    {id:3 , name: "product3" , title: "hi! welcome to the product 3"},
  ]

  let {id} = await params
  
  let product = Product.find((p)=> p.id === parseInt(id))

  if(!product){
     notFound()
  }

  return(<div>
    <h1>{product.name}</h1>
    <h1>{product.title}</h1>

    <Link href={"/product"}> go to product </Link>
  </div>)
}