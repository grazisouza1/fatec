"use client";

import { IProduct } from "@/interfaces/products.interface";
import { useEffect, useState } from "react";
import { getProducts } from "./api";
import ProductCard from "@/components/product/ProductCard";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function findProducts() {
    const products = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    findProducts();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Produtos</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
