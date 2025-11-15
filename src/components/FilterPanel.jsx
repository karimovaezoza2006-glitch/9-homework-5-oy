import React from "react";

const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Filtrlash</h2>

      <div className="mb-5">
        <label htmlFor="search" className="block mb-1 font-medium text-gray-700">
          Nom bo‘yicha qidiruv
        </label>
        <input
          id="search"
          name="search"
          type="text"
          value={filters.search}
          onChange={handleChange}
          placeholder="Mahsulot nomini kiriting..."
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="category" className="block mb-1 font-medium text-gray-700">
          Kategoriya
        </label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Hammasi</option>
          <option value="books">Kitoblar</option>
          <option value="electronics">Elektronika</option>
          <option value="clothes">Kiyimlar</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="price" className="block mb-1 font-medium text-gray-700">
          Narx
        </label>
        <select
          id="price"
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Hammasi</option>
          <option value="low">Arzon (1,000,000 so'mgacha)</option>
          <option value="high">Qimmat (1,000,000 so'mdan yuqori)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
