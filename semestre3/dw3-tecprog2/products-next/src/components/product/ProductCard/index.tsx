import { IProduct } from "@/interfaces/products.interface";

export default function ProductCard(props: { product: IProduct }) {
  const product = props.product;
  return (
    <div className="grid grid-cols-4 m-5 shadow">
      <div className="col-span-1">
        <img className="h-32" src=" " />
      </div>
      <div className="col-span-3 flex flex-col">
        <span className="font-bold font-lg">{product.name}</span>
        <span className="font-bold text-red-700"> R$ {product.price}</span>
      </div>
    </div>
  );
}
