export default async function ProductDetails({
    params,
}:{
    params:Promise<{productId: string}>;
}){
    const productId=(await params).productId;
  return <h1>Details of the products {productId}</h1>
}