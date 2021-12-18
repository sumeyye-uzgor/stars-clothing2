import React from "react";
import shopData from "../db/ShopData";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="grid grid-cols-3 justify-center items-center gap-3">
        {shopData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
