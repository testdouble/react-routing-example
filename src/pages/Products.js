import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../store";
import useQueryStringSync from "../useQueryStringSync";

export default function ProductsPage() {
  const renderCounter = React.useRef(0);
  renderCounter.current = renderCounter.current + 1;
  const { products, categories } = useAppState();
  const [queryParams, setQueryParams] = useQueryStringSync();
  const [minPrice, setMinPrice] = React.useState(queryParams.minPrice);
  const [maxPrice, setMaxPrice] = React.useState(queryParams.maxPrice);
  const [filteredCategories, dispatch] = React.useReducer(
    categoryFilterReducer,
    new Set(queryParams.categories || [])
  );

  const filteredProducts = products.filter((product) => {
    if (
      filteredCategories.size > 0 &&
      !product.categories.some((cat) => filteredCategories.has(cat))
    ) {
      return false;
    }
    if (minPrice != null && product.price.raw < minPrice * 100) {
      return false;
    }
    if (maxPrice != null && product.price.raw > maxPrice * 100) {
      return false;
    }
    return true;
  });

  React.useEffect(() => {
    const nextParams = {
      categories: [...filteredCategories],
    };
    if (minPrice != null) {
      nextParams.minPrice = minPrice;
    }
    if (maxPrice != null) {
      nextParams.maxPrice = maxPrice;
    }
    setQueryParams(nextParams);
  }, [setQueryParams, minPrice, maxPrice, filteredCategories]);

  return (
    <div className="mt-4">
      <div className="ml-4">
        <div className="flex">
          <div className="pt-1">
            <span className="font-bold text-gray-800">Categories:</span>
            {categories.map((category) => (
              <label key={category} className="ml-2">
                {category}:
                <input
                  className="ml-1"
                  type="checkbox"
                  checked={filteredCategories.has(category)}
                  onChange={(evt) => {
                    dispatch(["TOGGLE", category]);
                  }}
                />
              </label>
            ))}
          </div>

          <label className="font-bold text-gray-800 ml-2">
            Min Price:
            <input
              type="number"
              value={minPrice || ""}
              className="ml-1 px-2 py-1 border rounded w-24"
              min="0"
              max="1000000"
              onChange={(evt) => {
                setMinPrice(parseFloat(evt.target.value) || null);
              }}
            />
          </label>
          <label className="font-bold text-gray-800 ml-2">
            Max Price:
            <input
              type="number"
              value={maxPrice || ""}
              className="ml-1 px-2 py-1 border rounded w-24"
              max="1000000"
              onChange={(evt) => {
                setMaxPrice(parseFloat(evt.target.value) || null);
              }}
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const categoryFilterReducer = (filteredCategoriesSet, [action, payload]) => {
  switch (action) {
    case "TOGGLE":
      let nextSet = new Set(filteredCategoriesSet);
      if (filteredCategoriesSet.has(payload)) {
        nextSet.delete(payload);
      } else {
        nextSet.add(payload);
      }
      return nextSet;
    default:
      return filteredCategoriesSet;
  }
};

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="m-2 rounded border border-gray-200 shadow-lg bg-white">
        <div className="flex justify-center pt-4">
          <img
            className="block h-40"
            src={product.imgSrc}
            alt={product.title}
          />
        </div>
        <div className="flex justify-between mt-2 p-6">
          <div className="text-gray-800">{product.title}</div>
          <div className="font-bold text-gray-800 ml-4">
            {product.price.formatted}
          </div>
        </div>
      </div>
    </Link>
  );
}
