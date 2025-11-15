// ItemCard.jsx

import React from "react";

const ItemCard = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect(item);
      }}
      className="cursor-pointer border rounded-lg p-4 shadow-md hover:shadow-xl focus:shadow-xl transition-shadow duration-300 bg-white flex flex-col outline-none"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
      <p className="text-gray-500 mb-1 capitalize">{item.category}</p>
      <p className="text-indigo-600 font-bold text-lg">{item.price.toLocaleString()} so'm</p>
      <p className="mt-2 text-gray-600 text-sm ">{item.description}</p>
    </div>
  );
};

export default ItemCard;
