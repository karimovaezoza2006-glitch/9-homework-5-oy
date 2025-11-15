import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto py-10 px-8 text-center text-gray-500">
        Sevimlilaringiz bo‘sh
      </div>
    );
  }

  return (
    <section className="container mx-auto py-10 px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-left">Sevimli Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favorites.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FavoritesPage;
