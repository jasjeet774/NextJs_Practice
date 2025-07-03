// app/products/page.tsx

import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            {product.title}
            <Link
              href={`/products/${product.id}`}
              className="text-blue-600 hover:underline"
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
