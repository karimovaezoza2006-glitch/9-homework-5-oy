// ItemList.jsx

import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ items, onSelect }) => {
  if (items.length === 0) {
    return <p className="text-center text-gray-500 mt-10 text-lg">Hech qanday mahsulot topilmadi</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ItemList;
