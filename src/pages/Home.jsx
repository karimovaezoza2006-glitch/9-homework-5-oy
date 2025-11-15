import React, { useState, useEffect, useRef } from "react";
import ProductGrid from "../components/ProductGrid";
import FilterPanel from "../components/FilterPanel";
import ItemList from "../components/ItemList";
import SelectedItemBanner from "../components/SelectedItemBanner";
import Favorites from "./Favorites";
import allItems from "../data/allItems";

const Home = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    search: "",
  });

  const [filteredItems, setFilteredItems] = useState(allItems);
  const [selectedItem, setSelectedItem] = useState(null);


  const didMountRef = useRef(false);

  useEffect(() => {
    let result = allItems;

    // Kategoriya bo‘yicha filter
    if (filters.category) {
      result = result.filter((item) => item.category === filters.category);
    }

    // Narx bo‘yicha filter
    if (filters.price === "low") {
      result = result.filter((item) => item.price < 1000000);
    } else if (filters.price === "high") {
      result = result.filter((item) => item.price >= 1000000);
    }

    // Qidiruv bo‘yicha filter (nomda)
    if (filters.search.trim() !== "") {
      const lowerSearch = filters.search.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(lowerSearch));
    }

    setFilteredItems(result);
    setSelectedItem(null); // filter o'zgarganda tanlanganni o'chirish

    // Scroll yo'q, filter yoki qidiruvda
  }, [filters]);

  // Mahsulot tanlanganda scroll yuqoriga
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:flex md:gap-10">
      <div className="md:w-1/4 mb-8 md:mb-0">
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>

      <div className="md:w-3/4">
        <SelectedItemBanner selected={selectedItem} />
        <ItemList items={filteredItems} onSelect={handleSelectItem} />
      </div>
    </div>
  );
};

export default Home;
