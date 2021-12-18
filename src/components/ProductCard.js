import React from "react";
import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as Basket } from "../assets/Basket.svg";
import { ReactComponent as HeartSolid } from "../assets/HeartSolid.svg";

const ProductCard = ({ product }) => {
  return (
    <div
      className="w-[300px] h-80 bg-cover rounded-[50px] flex items-center p-6 flex-col justify-between text-white hover:text-black"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] py-3 h-min px-4 rounded-lg text-white cursor-pointer hover:opacity-75">
        {product.name.toUpperCase()}
      </div>
      <div className="flex flex-row justify-between w-full text-xl items-end font-bold">
        <div>${product.price}</div>
        <div>
          <Heart width={30} height={30} />
          <Basket width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
