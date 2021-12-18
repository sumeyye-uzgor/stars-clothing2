import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#4287f5] h-16 px-16 flex items-center justify-between">
      <div className="font-bold text-2xl">Star's Clothing</div>
      <div className="flex flex-row gap-3 font-semilbold text-xl">
        <div>Favorites</div>
        <div>Contact</div>

        <div>Sepet</div>
      </div>
    </div>
  );
};

export default Navbar;
