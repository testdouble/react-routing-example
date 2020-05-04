import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../store";
import { SuccessButton } from "../components";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useAppState();
  const product = products.find((p) => p.id == id); // eslint-disable-line

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="bg-white pb-6">
      <BackLink />
      <div className="mt-4 flex justify-evenly flex-col sm:flex-row">
        <div className="p-2">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="h-64 sm:h-32 xl:h-64"
          />
        </div>
        <div className="px-6 mt-4 sm:mt-0 sm:ml-8 md:max-w-lg lg:max-w-xl">
          <h1 className="text-4xl text-gray-800 sm:text-2xl leading-tight tracking-tight">
            {product.title}
          </h1>
          <div className="text-gray-800 text-lg mt-4 leading-snug">
            {product.description}
          </div>
          <div className="mt-4 text-gray-800 text-lg">
            Price: <span className="font-bold">{product.price.formatted}</span>
          </div>
          <div className="mt-4">
            <SuccessButton>Add to Cart</SuccessButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export const BackLink = (props) => {
  return (
    <Link
      to="../"
      className="inline-block mt-4 px-4 py-3 ml-4 bg-blue-400 rounded text-gray-100 font-semibold uppercase shadow-lg sm:text-sm sm:font-bold hover:bg-blue-500 active:bg-blue-600"
    >
      &lt; Back
    </Link>
  );
};
