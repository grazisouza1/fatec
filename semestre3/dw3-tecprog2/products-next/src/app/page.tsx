import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link href={"/users"}>Users</Link>{" "}
        {/*Toda pasta que vc cria no src vira uma rota. Ex.: Esxiste a pasta users no src, então isso já é uma rota */}
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/products"}>Products</Link>
      </nav>
    </div>
  );
}
