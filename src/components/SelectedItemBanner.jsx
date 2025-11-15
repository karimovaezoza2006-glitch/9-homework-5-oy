import React from "react";

const SelectedItemBanner = ({ selected }) => {
  if (!selected) return null;

  return (
    <div className="bg-indigo-100 text-indigo-900 p-4 rounded-md mb-6 shadow-md flex items-center gap-4 sticky top-0 ">
      <img
        src={selected.image}
        alt={selected.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="font-semibold text-lg">{selected.name}</h3>
        <p className="text-sm">{selected.category} | {selected.price.toLocaleString()} so'm</p>
      </div>
    </div>
  );
};

export default SelectedItemBanner;
